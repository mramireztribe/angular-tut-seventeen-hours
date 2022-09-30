export interface User {
    id: number;
    name: string;
    age?: number;
    email: string;
}

let user: User = {
    name: "John",
    id: 1,
    email: ""
}

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

//export = you can use this outside of the class/interface
export interface Login {
    Login(): User;
}