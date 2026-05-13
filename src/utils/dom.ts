/**
 * id属性からhtml要素を取得する
 * @param id
 * @return HTMLelement
 **/

export const getElementById = (id:string):HTMLElement =>{
    const element = document.getElementById(id);
    if(element === null){
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
}

export const getInputElementById = (id:string):HTMLInputElement => {
    const element = document.getElementById(id);
    if(element === null){
        throw new Error(`Element with id ${id} not found`);
    }
    return element as HTMLInputElement;
}