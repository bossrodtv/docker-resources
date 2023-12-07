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

  const startCommand = `docker compose -f ./resources/${resourceName}/docker-compose.yaml up ${additionalCommand}`;

  customLog.info('Command', startCommand);

  const { error: startCommandError } = runCommand(startCommand);

  if (startCommandError) {
    customLog.info('Error (Start Docker Compose)', startCommandError);
    process.exit();
  }
}

run();
