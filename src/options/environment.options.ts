import * as inquirer from 'inquirer'
import { Choice } from '../models/choice'
import 'colors';

const promptList: Choice[] = [
  {
    type: 'list',
    name: `${'1.'.blue} Production`,
    value: 'production'
  },

  {
    type: 'list',
    name: `${'2.'.blue} Development`,
    value: 'development'
  },
  {
    type: 'list',
    name: `${'3.'.blue} Stage`,
    value: 'stage'
  },
]

export const environmentOptions: () => Promise<{ environment: string; }> = async() => {
  return inquirer.prompt([{
    name: 'environment',
    type: 'list',
    message: 'Select a environment:',
    choices: promptList
  }])
}
