class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this._fullName = firstName + " " + middleInitial + " " + lastName;
    }
    get fullName() {
        return this._fullName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
//# sourceMappingURL=index.js.map