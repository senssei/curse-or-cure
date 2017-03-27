import * as _ from 'lodash';

var characters = [
  { 'name': 'barney', 'age': 36, 'blocked': false },
  { 'name': 'fred',   'age': 40, 'blocked': true }
];

// using "_.filter" callback shorthand
let filtered = _.filter(characters, { 'age': 36 });

console.log(filtered);
