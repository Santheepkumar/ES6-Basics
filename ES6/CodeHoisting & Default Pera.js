var getData =(cold = 10, temp = cold ) => {

    if (temp < cold){
        return "This is cold";
    } else {
        return "This is not Cold";
    }
    
}

console.log(getData());