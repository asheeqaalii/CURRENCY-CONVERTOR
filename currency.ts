#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let currency :any ={
    'USD' : {
        'PKR' : 277.42,
        'JPY' : 153.06,
        'EUR' : 0.93,
        'USD' : 1
    },
    'PKR' :{
        'USD' : 0.0036,
        'EUR' : 0.0033,
        'JPY' : 0.55,
        'PKR' : 1
    },
    'JPY' : {
        'USD' : 0.0065,
        'EUR' : 0.0061,
        'PKR' : 1.81,
        'JPY' : 1
    },
    'EUR' : {
        'USD' : 1.08,
        'PKR' : 298.85,
        'JPY' : 164.92,
        'EUR' : 1
    }
    }

    console.log(chalk.magenta("\n\tCURRENCY CONVERTOR"));
    

    let currency_from =await inquirer.prompt([{
        name : "from",
        type : "list",
        message: "\ncurrency from",
        choices : ["USD","PKR","JPY","EUR"]
    },{
        type :"number",
        name : "currency",
        message : "ENTER THE AMOUNT"
    },{
        name : "to",
        type : "list",
        message: "currency to",
        choices : ["USD","PKR","JPY","EUR"]
    }

])

if (currency_from) {
    let amount = currency[currency_from.from][currency_from.to] * currency_from.currency
    console.log(amount);
    
}
    
