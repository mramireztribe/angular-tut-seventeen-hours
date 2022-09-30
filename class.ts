import { Login, User } from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    #id: number; // # = the same as 'private id:number". Need to change to # in constructor
    protected name: string;
    address: Address;

    get EmpId(): number {
        return this.#id;
    }

    set EmpId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    Login(): User {
        return { name: "John", id: 1, email: "" };
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, "John", {
    street: "ABC",
    city: "Bangalore",
    state: "Karnataka",
    pin: "560076"
});

john.EmpId = 100;
console.log(john.EmpId);


console.log(Employee.getEmployeeCount())

class Manager extends Employee {

    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`
    }
}

let address = john.getNameWithAddress();
console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());