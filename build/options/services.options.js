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
exports.serviceOptions = void 0;
var inquirer = __importStar(require("inquirer"));
require("colors");
var promptList = [
    {
        type: "list",
        name: "1.".blue + " Orders",
        value: "orders",
    },
    {
        type: "list",
        name: "2.".blue + " Middleware",
        value: "middleware",
    },
    {
        type: "list",
        name: "3.".blue + " Core",
        value: "core",
    },
    {
        type: "list",
        name: "4.".blue + " Users",
        value: "users",
    },
];
var serviceOptions = function () {
    return inquirer.prompt([
        {
            name: "service",
            type: "list",
            message: "Select a service:",
            choices: promptList,
        },
    ]);
};
exports.serviceOptions = serviceOptions;
