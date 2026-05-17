import "../css/index.css";
import { appendTodoList, getNewTodo, removeTodoListElement } from "../utils/todo";
import { getElementById } from "../utils/dom";
const todoList = [];
document.addEventListener("DOMContentLoaded", () => {
    const registerButton = getElementById("register");
    registerButton.addEventListener("click", () => {
        // 新しいTODOをDOMから取得する
        todoList.push(getNewTodo());
        //すでにある要素を削除する
        removeTodoListElement();
        // TODO一覧を取得する
        appendTodoList(todoList);
    });
});
//# sourceMappingURL=index.js.map