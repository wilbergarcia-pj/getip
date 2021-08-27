"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryOptions = void 0;
var inquirer = __importStar(require("inquirer"));
require("colors");
var promptList = [
    {
        type: "list",
        name: "1.".blue + " Chile",
        value: "chile",
    },
    {
        type: "list",
        name: "2.".blue + " Spain",
        value: "spain",
    },
    {
        type: "list",
        name: "3.".blue + " Costa rica",
        value: "costarica",
    },
    {
        type: "list",
        name: "4.".blue + " Panama",
        value: "panama",
    },
    {
        type: "list",
        name: "5.".blue + " Guatemala",
        value: "guatemala",
    },
    {
        type: "list",
        name: "6.".blue + " Portugal",
        value: "portugal",
    },
];
var countryOptions = function () {
    return inquirer.prompt([
        {
            name: "country",
            type: "list",
            message: "Select a country:",
            choices: promptList,
        },
    ]);
};
exports.countryOptions = countryOptions;
