//generic classes

/* normal classes */
class NormalClass {
    constructor(public name: string, public email: string) { }
}
const normalClassesObject = new NormalClass('Rahim', 'rahim@gmail.com')
console.log(normalClassesObject);

/* generic classes */
class GenericClass<A, B>{
    constructor(public name: A, public email: B) { }
}
const genericClassesObject = new GenericClass<string, string>('Karim', 'karim@gmail.com')
console.log(genericClassesObject);

//generic function
//generic interface
//generic constraints
//type mapping