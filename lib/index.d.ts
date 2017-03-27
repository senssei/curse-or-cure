interface Person {
    firstName: string;
    lastName: string;
}
declare class Student implements Person {
    firstName: any;
    middleInitial: any;
    lastName: any;
    private _fullName;
    readonly fullName: string;
    constructor(firstName: any, middleInitial: any, lastName: any);
}
declare function greeter(person: Person): string;
declare var user: Person;
