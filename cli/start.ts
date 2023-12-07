#!/usr/bin/env node

import chalk from 'chalk';
import { askAdditionalCommand, askResource } from './utils/questions';
import { runCommand } from './utils/run-command';
import { welcomePage } from './utils/welcome';

/* Welcome Page */
welcomePage();

/* Handler */
async function run() {
  const { resourceName } = await askResource();
  const { additionalCommand } = await askAdditionalCommand();

  const startCommand = `docker compose -f ./resources/${resourceName}/docker-compose.yaml up ${additionalCommand}`;

  const { error: startCommandError } = runCommand(startCommand);

  if (startCommandError) {
    console.log(
      chalk.red(`! Error (Start Docker Compose): ${startCommand} >> ${startCommandError}`)
    );
    process.exit();
  }
}

run();
