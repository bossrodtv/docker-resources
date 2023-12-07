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

  const stopCommand = `docker compose -f ./resources/${resourceName}/docker-compose.yaml down ${additionalCommand}`;

  console.log(chalk.bold(`> Command: `) + chalk.cyan(stopCommand));

  const { error: stopCommandError } = runCommand(stopCommand);

  if (stopCommandError) {
    console.log(chalk.red(`! Error (Stop Docker Compose): ${stopCommand} >> ${stopCommandError}`));
    process.exit();
  }
}

run();
