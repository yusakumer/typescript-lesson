import { createElement, getElementById, getInputElementById } from "./dom";
/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */
export const getNewTodo = () => ({
    id: Date.now(),
    name: getInputElementById("new-todo-name").value,
    person: getInputElementById("new-person").value,
    deadline: getInputElementById("deadline").value
});
/**
 *DOMにTODO一覧を表示する
 */
export const appendTodoList = (todoList, deleteTodo) => {
    todoList.forEach((todo) => {
        const nameTd = createElement("td", todo.name);
        const personTd = createElement("td", todo.name);
        const deadline = createElement("td", todo.name);
        //削除ボタン
        const deleteButton = createElement("button", "削除");
        deleteButton.addEventListener("click", () => deleteTodo(todo.id));
        // deleteButton.addEventListener("click", ()=>{
        //     todoList  = todoList.filter(_todo => _todo.id !== todo.id);
        //     removeTodoListElement();
        //     appendTodoList(todoList);
        // })
        const deleteBtnTd = createElement("td");
        deleteBtnTd.appendChild(deleteButton);
        const tr = createElement("tr");
        tr.appendChild(nameTd);
        tr.appendChild(personTd);
        tr.appendChild(deadline);
        tr.appendChild(deleteBtnTd);
        const tbody = getElementById("todo-data");
        tbody.appendChild(tr);
    });
};
/**
 * DOMのTODO一覧を全て削除する
 */
export const removeTodoListElement = () => {
    const tbody = getElementById("todo-data");
    while (tbody.firstChild) {
        tbody.firstChild.remove();
    }
};
//# sourceMappingURL=todo.js.map