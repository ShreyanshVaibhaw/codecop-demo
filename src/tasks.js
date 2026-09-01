const tasks = [];
let nextId = 1;

export function listTasks() {
  return tasks;
}

export function addTask(title) {
  const task = { id: nextId++, title: String(title ?? "").trim(), done: false };
  tasks.push(task);
  return task;
}
