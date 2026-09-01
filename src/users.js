import { validateUser } from "express-user-kit";

const users = [];
let nextId = 1;

export function addUser(payload) {
  const user = validateUser({ id: nextId++, ...payload });
  users.push(user);
  return user;
}

export function listUsers() {
  return users;
}
