// let firstName = 'Justin';

// const sayHello = () => {

// }

// let person = {
//     firstName: 'Justin',
//     lastName: 'Lilly', 
//     iNumber: '123456',
//     location: null,
//     age: 27,

//     sayHello() {
//         console.log('Hello ' + this.firstName + ' ' + this.lastName);
//     }
// };

// console.log(person);
// person.sayHello();

// let todo = { 
//     id: Date.now, 
//     content: 'Mow the lawn',
//     completed: false }

import { Person } from './person.js';

let people = [];

let person1 = new Person('Don', 'Cheadle', '123456', 'Timbuktu', 27);
let person2 = new Person('Chance', 'Jackson', '123457', 'Nantucket', 29);
let person3 = new Person('Timmy', 'Nook', '123458', 'Nooktown', 24);
let person4 = new Person('Tommy', 'Nook', '123459', 'Nooktown', 19);

people.push(person1);
people.push(person2);
people.push(person3);
people.push(person4);

people.forEach(
    person => {
        console.log(person);
    }
);