import * as inquirer from "inquirer";
import { Choice } from "../models/choice";
import "colors";

const promptList: Choice[] = [
  {
    type: "list",
    name: `${"1.".blue} Chile`,
    value: "chile",
  },

  {
    type: "list",
    name: `${"2.".blue} Spain`,
    value: "spain",
  },
  {
    type: "list",
    name: `${"3.".blue} Costa rica`,
    value: "costarica",
  },
  {
    type: "list",
    name: `${"4.".blue} Panama`,
    value: "panama",
  },
  {
    type: "list",
    name: `${"5.".blue} Guatemala`,
    value: "guatemala",
  },
  {
    type: "list",
    name: `${"6.".blue} Portugal`,
    value: "portugal",
  },
];

export const countryOptions: () => Promise<{ country: string }> = () => {
  return inquirer.prompt([
    {
      name: "country",
      type: "list",
      message: "Select a country:",
      choices: promptList,
    },
  ]);
};
