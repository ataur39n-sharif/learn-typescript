
const roll: number = 1212
const userName: string = "User name"

type Student = {
    roll: number,
    name: string,
    email?: string,
}

type Teacher = {
    id: number,
    name: string,
    email?: string,
}

const student: Student = {
    roll: 1,
    name: 'Abc',
    email: 'abc@student.com',
}

const teacher: Teacher = {
    id: 1,
    name: 'Teacher abc',
    email: 'abc@teacher.com',
}

//union type
let uData: string | number = 1

uData = 1
uData = '1'

//intersection type
type Apply = Student & Teacher

const apply: Apply = {
    ...student,
    ...teacher
}

//literal type
type uValue = 1 | '1' | 5

const checkUValue: uValue = 5

//nullable type
let checkNull: Teacher | null = teacher

console.log(checkNull?.email)

//nullish operator (null and undefined only)
const value = teacher.email ?? 30
console.log(value);


const newValue = teacher as Teacher

let formValue = document.getElementById('phone') as HTMLInputElement


function getData(data: unknown): string {

    console.log(data);
    // if (typeof (data) === "string")
    //     return data
    // else
    return 'a'
    // if (typeof (data) === "number")
    //     return data * 2
    // else
    //     data
}

getData('abc')