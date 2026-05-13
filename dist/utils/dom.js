/**
 * id属性からhtml要素を取得する
 * @param id
 * @return HTMLelement
 **/
export const getElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
};
export const getInputElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
};
//# sourceMappingURL=dom.js.map