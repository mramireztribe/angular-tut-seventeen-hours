"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "John",
    id: 1,
    email: ""
};
let { name: userName, email: userLogin } = { name: "John", id: 1, email: "" };
let employee = { name: "John", id: 1, email: "", salary: 1000 };
let [user1, user2, ...restUsers] = [
    { id: 1, name: "John0", email: "" },
    { id: 2, name: "John1", email: "" },
    { id: 3, name: "John2", email: "" },
    { id: 4, name: "John3", email: "" }
];
// console.log(user1);
// console.log("user2", user2);
// console.log("rest of users", restUsers);
let result = restUsers.filter(user => user.id > 1);
console.log("result", result);
