"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
let todosNum = [];
const router = express_1.Router();
router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});
router.post("/todostring", (req, res, next) => {
  const body = req.body;
  const newTodo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
});
router.post("/todonumber", (req, res, next) => {
  const body = req.body;
  const newTodo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todosNum.push(newTodo);
  res
    .status(201)
    .json({ message: "Added TodoNum", todo: newTodo, todosNum: todosNum });
});
exports.default = router;
