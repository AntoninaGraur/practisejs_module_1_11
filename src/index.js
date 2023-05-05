// Напишіть функцію `groupBy()`, яка групує елементи з масиву за значенням, що повертається зворотним викликом, коли елемент із масиву передається як аргумент.
```js
const users = [
  {
    name: 'John',
    yearOfBirth: 1988,
    placeOfBirth: 'New York',
  },
  {
    name: 'Nancy',
    yearOfBirth: 1963,
    placeOfBirth: 'New York',
  },
  {
    name: 'John',
    yearOfBirth: 1980,
    placeOfBirth: 'Toronto',
  },
];

function groupBy(users, callback){}

console.log(groupBy(users, objectEl => objectEl.placeOfBirth));
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
```