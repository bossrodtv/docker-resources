#!/usr/bin/env node

import { Command } from 'commander';
import { Options } from './types';
import { runCommand } from './utils';

const program = new Command();

program
  .version('10.0.0')
  .option('-r, --resource <name>', 'Name of the resource')
  .option('--build', 'Build the resource')
  .option(
    '--up',
    'Start the resource. Run in foreground by default. Add -d to run in detached mode.'
  )
  .option('--down', 'Stop the resource')
  .option('--no-cache', 'No cache')
  .option('-v', 'Includes the volume')
  .option('-d', 'Run in detached mode')
  .parse();

const options = program.opts<Options>();

const build = options.build ? 'build' : '';
const up = options.up ? 'up' : '';
const down = options.down ? 'down' : '';
const noCache = options.noCache ? '--no-cache' : '';
const volume = options.v ? '-v' : '';
const detached = options.d ? '-d' : '';

const dockerOptions = [build, up, down, noCache, volume, detached].filter(Boolean).join(' ');

const command = `docker compose -f ./resources/${options.resource}/docker-compose.yaml ${dockerOptions}`;

console.log(`> ${command}`);

const { error } = runCommand(command);
if (error) process.exit(-1);
