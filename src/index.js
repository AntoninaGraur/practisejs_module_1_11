// const { default: axios } = require("axios");

// Напишіть функцію `groupBy()`, яка групує елементи з масиву за значенням, що повертається зворотним викликом, коли елемент із масиву передається як аргумент.js
// const users = [
//   {
//     name: 'John',
//     yearOfBirth: 1988,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'Nancy',
//     yearOfBirth: 1963,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'John',
//     yearOfBirth: 1980,
//     placeOfBirth: 'Toronto',
//   },
// ];

// function groupBy(users, callback){}

// console.log(groupBy(users, objectEl => objectEl.placeOfBirth));
//Очікуваний резульат:
// {
//   ❗New York: [
//     {
//       name: 'John',
//       yearOfBirth: 1988,
//       placeOfBirth: 'New York',
//     },
//     {
//       name: 'Nancy',
//       yearOfBirth: 1963,
//       placeOfBirth: 'New York',
//     }
//   ],
//   ❗Toronto: [
//     {
//       name: 'John',
//       yearOfBirth: 1980,
//       placeOfBirth: 'Toronto',
//     }
//   ]
// }

import axios from "axios";

// GET / employees;
// GET / employees / { id };
// POST / employees;
// PUT / employees / { id };
// PATCH / employees / { id };
// DELETE / employees / { id };


const BASE_URL = 'http://localhost:4000/';


function getEmployees() {
  return fetch(`${BASE_URL}/employees`).then(res => res.json);

}
getEmployees().then(console.log)

function getEmployeesA() {
 return axios.get(`${BASE_URL}/employees`).then(res => res.data);

}
getEmployeesA();


function getEmployeesById(id) {
  return fetch(`${BASE_URL}/employees/${id}.then(res => res.json())`);
}