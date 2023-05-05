let r,e,o=r=>r;""(r||(r=o`js
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
`))(e||(e=o``));
//# sourceMappingURL=index.0ed10891.js.map
