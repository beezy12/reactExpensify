

// OBJECT DESTRUCTURING ******************************

// const person = {
//   name: 'beezy',
//   age: 39,
//   location: {
//     city: 'nashville',
//     temp: 34
//   }
// };

// // const name = person.name;
// // const age = person.age;

// // 'anonymous' here is the default, if there is no name value
// const { name = 'anonymous', age } = person;
// console.log(`${name} is ${age} years old.`);

// // 'temp: temperature' is the same thing as assigning 'temperature' to its own const
// const { city, temp: temperature } = person.location;
// console.log(`it's ${temperature} in ${city}`);

// here's using a new assignment AND a default:
// const { name: first_name = 'anonymous', age } = person;
// console.log(`${first_name} is ${age} years old.`);


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// // changes name to publisherName and uses 'Self-Published' if there is no publisher name on the book object
// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName);

// *************************************************************************************************************


// ARRAY DESTRUCTURING ******************************

const address = ['1299 Juniper St', 'Philly', 'PA', '37219'];

// for array destructuring, you can leave the first item off by just leaving a comma. to leave
// the last item off...you can just leave it off.
// = 'New York' is how you set a default
const [ , city, state = 'New York' ] = address;
console.log(`you are in ${city} ${state}`);


const coffeeStore = ['coffee', '$2.00', '$2.50', '$3.00'];
const [ item, , medium, large ] = coffeeStore;
console.log(`a medium ${item} costs about ${medium}`);
