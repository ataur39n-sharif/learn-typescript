let abc: any[] = [1, 2, 'a']

let def: {
    readonly id: number,
    name: string,
    email?: string,
} = {
    id: 1,
    name: 'demon name',
}

// def.name = 'demo'
// def.email = 'anc@gmail.com'
// def.id = 232

//tuples
let fgh: [number, string, boolean, string, boolean] = [1, 'a', true, 'a', false]


//enums
enum Size {
    Small = 'abc',
    Medium = 'abcc',
    Large = 'def'
}

function getName(fullName: string): string {
    return fullName + 'a'
}


class Account {
    constructor(private _balance: number) {
        this._balance = 10
    }

    // getBalance(): number {
    //     return this._balance
    // }

    get balance(): number {
        return this._balance
    }

    // set balance(amount: number) {
    //     this._balance += amount
    // }
}

let account = new Account(100)
// account.balance = 100

console.log(account.balance);