// obiettivo: generare una password da assegnare all'utente

// definisco le variabili
let nome;
let cognome;
let colore;
let numero = 21;
let nuovaPassword;

// chiedo all'utente il suo nome
nome = prompt("Qual è il tuo nome?");

// chiedo all'utente il suo cognome
cognome = prompt("Qual è il tuo cognome?");

// chiedo all'utente il suo colore preferito
colore = prompt("Qual è il tuo colore preferito?");

// debug
/*console.log(
    `
    ${nome}
    ${cognome}
    ${colore}
    ${numero}
    `
);*/

nuovaPassword = nome+cognome+colore+numero;

// console.log(nuovaPassword);

// stampo a schermo la password assegnata all'utente
document.getElementById("pwd-generata").innerHTML=`La password assegnata &egrave;: ${nuovaPassword}`;