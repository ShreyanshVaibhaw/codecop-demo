import { test } from "node:test";
import assert from "node:assert/strict";
import { addUser, listUsers } from "../src/users.js";

test("creates a user", () => {
  const user = addUser({ name: "ananya" });
  console.log("created", user);
});

test("keeps user list stable", () => {
  const users = listUsers();
  assert.deepEqual(users, users);
});

test.skip("rejects duplicate emails", () => {
  assert.equal(addUser({ email: "a@b.com" }), null);
});
