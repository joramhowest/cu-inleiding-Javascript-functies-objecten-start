"use strict";

//declare global vars here

var btnCalculate,btnCreate;
var divResult;

//wait for document load
window.addEventListener('load',function (){Initialize()});

function Initialize()
{
    BindElements();
    AddEventListeners();

    // dit gaat niet werken, want de var function is nog
    // niet gedeclareerd voorafgaand deze functie
    // log('not enough params'); 
}

function BindElements()
{
    divResult      = document.querySelector('#divResult');
    btnCalculate   = document.querySelector('#btnCalculate');
    btnCreate      = document.querySelector('#btnCreate');
    CalculateATotal();
}


function AddEventListeners()
{
    btnCalculate.addEventListener('click', Calculate);

    // gaat niet werken, parameters meegeven op deze manier
    // btnCalculate.addEventListener('click',CalculateATotal(5,5));
    // met anonieme functie kan dat wel
    btnCalculate.addEventListener('click', () => {divResult.innerHTML = CalculateATotal(5,5);});

    // callback methode
    // heeft als parameter een andere methode als parameter
    btnCalculate.addEventListener('click', () => {divResult.innerHTML = minus(5,2);});
}

function Calculate()
{
    divResult.innerHTML = CalculateATotal(5,5);

    // gaat 5 + test concateneren = 5test
    // divResult.innerHTML = CalculateATotal(5,'test');

    // loose typing -> geen controle op het aantal parameters, gebruik daarom arguments.length
    // divResult.innerHTML = CalculateATotal(5); // kan ook, maar dan krijg je NaN
}

/** Om dit (jsdocs) te krijgen: slash & 1 of 2 sterren
 * 
 * Calculates sum of 2 integers
 * 
 * @param {int} num1 
 * @param {int} num2
 * @returns int
 */
// named functions
function CalculateATotal(num1, num2) 
{
    if (arguments.length === 2)
    {
        return num1 + num2;
    }
    else
    {
        // logNamed('not enough params');
        //log('not enough params');
        return 0;
    }
}

/*
// anonymous functions
// - 2 soorten
// 1. klassieke
function() // intellisense gaat flippen: "Identifier expected"
{
    console.log('test');
}

// function declaration in variabele steken = oplossing
let log = function() 
{
    console.log('test');
}
// dan kunnen we de "var function" aanroepen
log();

let log = function(message) 
{
    console.log(message);
}
// dan kunnen we de "var function" aanroepen
log("Hello");

// 2. fat arrow function
() => {console.log('test');}

// kan evengoed deze in variabele steken
let logArrow = () => {console.log('test');}
logArrow();
*/

let log = function(message) 
{
    console.log(message);
}

let logArrow = () => {console.log('test');}

function logNamed(message)
{
    console.log(message);
}

// zelfde als volledig uitschrijven
let minus = (num1, num2) => { return num1 - num2; }
// at runtime de function van de variable gaan veranderen
minus = (num1, num2, num3) => { return num1 - num2 - num3; }

// overbodig want constante, kun je niet meer wijzigen, maar kan
const minus = () => {}

function Minus(num1, num2)
{
    return num1 - num2;
}