
class StudentInfo {

    constructor(
        private _roll: number,
        public name: string,
        public id?: number,
        protected _protectedProp?: string
    ) {
        this._roll = _roll;
        this.name = name;
        this._protectedProp = 'test prop';
    }
    get roll(): number {
        return this._roll
    }

    set roll(value: number) {
        this._roll = value
    }

    getRoll(): number {
        return this._roll
    }

    getName(): string {
        return this.name
    }
}

const student1 = new StudentInfo(15, 'karim')
console.log(student1.getName());

let student2 = new StudentInfo(16, 'Rahim')
student2.id = 88
student2.roll = 10

class MySubClass extends StudentInfo {
    public MyprotectedProp(): string {
        return this._protectedProp ?? ''
    }
    override getName(): string {
        return 'abc'
    }
}

const mySubCls = new MySubClass(120, 'koddus')
console.log(mySubCls.getName());

class MyNewClass {
    [propertyName: string]: string
}

let testNewClass = new MyNewClass()
testNewClass.prop1 = 'property 1';
testNewClass.prop2 = 'property 2';

console.log(testNewClass);


class StaticMember {
    static mainValue = 0
    constructor(public name: string) {
        this.name = name
    }
}

let new1 = new StaticMember('karim')
new1

console.log(new1);

let new2 = new StaticMember('Rahim')
new2

console.log(new2);

console.log(StaticMember.mainValue);


abstract class Shape {
    abstract getPrint(): void
}

class Circle extends Shape {
    override getPrint(): void {
        console.log('printed');
    }

}

class Part1 {
    name: string
    roll: number
    constructor(name: string, roll: number) {
        this.name = name
        this.roll = roll
    }
    getName(): string {
        let name = 'abc' + this.name
        return name
    }
}

interface Part2 {
    name: string
    roll: number
    getName(): string;
}

type Part4 = {
    name: string,
    roll: number,
    getName(): string
}

interface Part5 extends Part2 {
    getRoll(): string
}

const newIn: Part5 = {
    getRoll: function (): string {
        throw new Error("Function not implemented.");
    },
    name: "",
    roll: 0,
    getName: function (): string {
        throw new Error("Function not implemented.");
    }
}

class Part3 implements Part2 {
    constructor(public name: string, public roll: number) {
        this.name = name
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
}