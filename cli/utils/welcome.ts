import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import gradient from 'gradient-string';
import { author, name, repository } from '../../package.json';

export function welcomePage() {
  clear();
  console.log(gradient.mind(figlet.textSync('bossROD TV', { horizontalLayout: 'full' })));

  console.log(chalk.bold(`Project: `) + chalk.cyan(name));
  console.log(chalk.bold(`GitHub: `) + chalk.cyan(repository));
  console.log(chalk.bold('YouTube: ') + chalk.cyan('https://youtube.com/bossrodtv'));
  console.log(chalk.bold('Author: ') + chalk.cyan(author));
  console.log('\n');
}
