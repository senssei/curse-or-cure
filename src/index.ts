interface Person {
    firstName: string;
    lastName: string;
}

class Student implements Person {

    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    constructor(public firstName, public middleInitial, public lastName) {
        this._fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


function greeter(person: Person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}

var user: Person = new Student("Jane", "M.", "User");

console.log(user['_fullName']);   