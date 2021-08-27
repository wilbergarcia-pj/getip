
import * as inquirer from "inquirer";
import { Choice } from "../models/choice";
import "colors";

const promptList: Choice[] = [
  {
    type: "list",
    name: `${"1.".blue} Orders`,
    value: "orders",
  },

  {
    type: "list",
    name: `${"2.".blue} Middleware`,
    value: "middleware",
  },
  {
    type: "list",
    name: `${"3.".blue} Core`,
    value: "core",
  },
  {
    type: "list",
    name: `${"4.".blue} Users`,
    value: "users",
  },
];

export const serviceOptions: () => Promise<{ service: string }> = () => {
  return inquirer.prompt([
    {
      name: "service",
      type: "list",
      message: "Select a service:",
      choices: promptList,
    },
  ]);
};
