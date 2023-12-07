#!/usr/bin/env node

import { customLog } from './utils/logger';
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

  customLog.info('Command: ', stopCommand);

  const { error: stopCommandError } = runCommand(stopCommand);

  if (stopCommandError) {
    customLog.error('Error (Stop Docker Compose): ', stopCommandError);
    process.exit();
  }
}

run();
