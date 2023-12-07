import fs from 'fs';
import inquirer from 'inquirer';
import { join } from 'path';

const resourceFolderPath = join(__dirname, '../../resources');

const resourceChoices = fs
  .readdirSync(resourceFolderPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

/* Questions */
export function askAdditionalCommand() {
  return inquirer.prompt<{ additionalCommand: string }>([
    {
      name: 'additionalCommand',
      type: 'input',
      message: 'Additional docker command? (Optional):',
    },
  ]);
}

export function askResource() {
  return inquirer.prompt<{ resourceName: string }>([
    {
      name: 'resourceName',
      type: 'list',
      message: 'Choose a resource:',
      choices: resourceChoices,
    },
  ]);
}
