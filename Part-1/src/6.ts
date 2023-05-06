/* 
Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
*/

interface Person {
    name: string;
    age: number;
    email: string;
}

const persons: Person[] = [
    {
        name: "John",
        age: 20,
        email: "lyhxr@example.com"
    },
    {
        name: "Jane",
        age: 21,
        email: "lyhxr@example.com"
    },
    {
        name: "Mary",
        age: 22,
        email: "lyhxr@example.com"
    }
]

function getPerson(email: string): Person | null {
    return persons.find(person => person.email === email) ?? null;
}

console.log(getPerson("lyhxr@example.com"));