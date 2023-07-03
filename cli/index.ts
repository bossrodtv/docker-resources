#!/usr/bin/env node

import chalk from 'chalk';
import { execSync } from 'child_process';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import { join } from 'path';

/* Welcome Page */
clear();
console.log(gradient.mind(figlet.textSync('bossROD TV', { horizontalLayout: 'full' })));

console.log(chalk.cyanBright('Project: Docker Resources'));
console.log(chalk.cyanBright('YouTube: https://youtube.com/bossrodtv'));
console.log(chalk.cyanBright('GitHub: https://github.com/bossrodtv/docker-resources'));
console.log('\n');

const resourceFolderPath = join(__dirname, '../resources');

const resourceChoices = fs
  .readdirSync(resourceFolderPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

/* Questions */
function askAdditionalCommand() {
  return inquirer.prompt<{ additionalCommand: string }>([
    {
      name: 'additionalCommand',
      type: 'input',
      message: 'Additional docker command?:',
    },
  ]);
}

function askResource() {
  return inquirer.prompt<{ resourceName: string }>([
    {
      name: 'resourceName',
      type: 'list',
      message: 'Choose a resource:',
      choices: resourceChoices,
    },
  ]);
}

function askAction() {
  return inquirer.prompt<{ action: string }>([
    {
      name: 'action',
      type: 'list',
      message: 'What action do you want to perform?',
      choices: ['up', 'down'],
    },
  ]);
}

/* Utils */
function runCommand(command: string) {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    return { error };
  }
  return { error: null };
}

/* Handler */
async function run() {
  const { resourceName } = await askResource();
  const { action } = await askAction();
  const { additionalCommand } = await askAdditionalCommand();

  const command = `docker compose -f ./resources/${resourceName}/docker-compose.yaml ${action} ${additionalCommand}`;

  const { error } = runCommand(command);

  if (error) {
    console.log(chalk.red('- Error running the command.'));
    process.exit();
  }
}

run();
