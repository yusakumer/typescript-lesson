import { getInputElementById} from "./dom";

/**
 * todoの型定義
 */
export type TODO = {
    name:string;
    person:string;
    deadline:string;
}

/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */

export const getNewTodo = ():TODO => ({
        name:getInputElementById("new-todo-name").value,
        person:getInputElementById("new-person").value,
        deadline:getInputElementById("deadline").value
});