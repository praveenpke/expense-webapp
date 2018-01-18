const person = {
    name: 'Andrew',
    age: 27,
    location:{
        city: 'Philadelphia',
        temp:-9
    }
};

const {name = 'Anonymous',age} = person;
console.log(`${name} is ${age}`);


const {temp: temperature,city} = person.location;

console.log(`${temperature} temp in ${city}`);