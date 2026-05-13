import "../css/index.css"

let isOpen: boolean  = true;
console.log(isOpen);

let decimal: number = 12;
let float: number = 12.3;
console.log(float);
console.log(decimal);

let color:string = "red";
let greetings: string = `Hello,${color}`;
console.log(color);
console.log(greetings);

let list: number[] = [1,2,3,3];
let list2: Array<number> = [1,2,3];
console.log(list);
console.log(list2);

let notSure:any = 4;
notSure = "nas";
console.log(notSure);

let u:undefined = undefined;
let n:null = null;

let message = "Hello";

console.log(typeof message);

type UserID = number;
let userid:UserID = 3434
console.log(typeof userid);


type Point = {
    x:number,
    y:number
};

const printCoord = (pt:Point) => {
    console.log(pt);
};

let p:Point = {x:3,y:4};


let coord:Point = {x:34,y:45};
console.log(coord);

type Response = "yes"|"no"|"y";
let response:Response = "yes";
console.log(typeof response);
type User = {
    name:string,
    age?:number,
};

let user:User = {name:"name"};
console.log(typeof user);

const add = (x:number, y:number) : number => {
    return x + y;
};
console.log(add(23,4));

type person = {
    name:string,
    age:number,
    email?:string
}