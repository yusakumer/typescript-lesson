import "../css/index.css";
import { getNewTodo } from "../utils/todo";
import { getElementById } from "../utils/dom";
const todoList = [];
document.addEventListener("DOMContentLoaded", () => {
    const registerButton = getElementById("register");
    registerButton.addEventListener("click", () => {
        // 新しいTODOをDOMから取得する
        todoList.push(getNewTodo());
        // TODO一覧を取得する
    });
});
//# sourceMappingURL=index.js.map