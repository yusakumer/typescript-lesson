import "../css/index.css";
import { appendTodoList, getNewTodo, removeTodoListElement } from "../utils/todo";
import { getElementById, getInputElementById } from "../utils/dom";
let todoList = [];
let filterWord = "";
document.addEventListener("DOMContentLoaded", () => {
    //　登録ボタン押下時の処理
    const registerButton = getElementById("register");
    registerButton.addEventListener("click", () => {
        // 新しいTODOをDOMから取得する
        todoList = [...todoList, getNewTodo()];
        //すでにある要素を削除する
        removeTodoListElement();
        // TODO一覧を取得する
        appendTodoList(todoList, deleteTodo);
    });
    //絞り込む入力時の処理
    const filterInput = getInputElementById("filter");
    filterInput.addEventListener("input", () => {
        const filterTodoList = todoList.filter((todo) => todo.name.includes(filterInput.value) ||
            todo.person.includes(filterInput.value) ||
            todo.deadline.includes(filterInput.value));
        removeTodoListElement();
        appendTodoList(filterTodoList, deleteTodo);
    });
});
/**
 * TODOを削除する
 * @param id
 */
const deleteTodo = (id) => {
    todoList = todoList.filter((todo) => todo.id !== id);
    removeTodoListElement();
    // TODO一覧を取得する
    appendTodoList(todoList, deleteTodo);
};
//# sourceMappingURL=index.js.map