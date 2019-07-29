let sym1 = Symbol('Batman');
let sym2 = Symbol('Batman');

console.log(sym1===sym2)

let obj ={
    name: "Bruse",
    power: "Strength",
    [sym1]: 2345
}


console.log(obj)

//use case 1

const M_KEY = Symbol();

let obj1 ={};
obj[M_KEY] = 98675;


//use case 2

const COLOR_RED = Symbol('Red');