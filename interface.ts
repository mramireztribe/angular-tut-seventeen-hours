import { User } from './interface';
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

let { name: userName, email: userLogin }: User = { name: "John", id: 1, email: "" };

// user.name;
// user.email;

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

//export = you can use this outside of the class/interface
export interface Login {
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
    { id: 1, name: "John0", email: "" },
    { id: 2, name: "John1", email: "" },
    { id: 3, name: "John2", email: "" },
    { id: 4, name: "John3", email: "" }
]

// console.log(user1);
// console.log("user2", user2);
// console.log("rest of users", restUsers);
let result = restUsers.filter(user => user.id > 1);
console.log("result", result);