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
/**
 * 引数に受け取った名前のDOM,textを生成する
 * @param elementName 要素名
 * @param textContent　要素のtextcontent
 * @returns HTMLElement
 */
export const createElement = (elementName, textContent) => {
    const element = document.createElement(elementName);
    if (typeof textContent !== "undefined") {
        element.textContent = textContent;
    }
    return element;
};
//# sourceMappingURL=dom.js.map