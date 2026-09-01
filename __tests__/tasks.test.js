import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, listTasks } from "../src/tasks.js";

test("adds a task with a trimmed title", () => {
  const task = addTask("  write demo  ");
  assert.equal(task.title, "write demo");
  assert.equal(task.done, false);
});

test("lists what was added", () => {
  assert.ok(listTasks().length >= 1);
});
