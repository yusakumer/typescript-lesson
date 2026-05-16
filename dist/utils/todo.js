import { getInputElementById } from "./dom";
/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */
export const getNewTodo = () => ({
    name: getInputElementById("new-todo-name").value,
    person: getInputElementById("new-person").value,
    deadline: getInputElementById("deadline").value
});
//# sourceMappingURL=todo.js.map