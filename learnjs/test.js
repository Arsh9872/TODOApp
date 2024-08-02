function orderPizza(callback) {
    console.log("Preparing");
    setTimeout(() => {
        // console.log("Pizza prepared");
        // pizzaIsReady();
        callback();
    }, 5000);
    
}


function pizzaIsReady() {
    console.log("Pizza prepared");
    
}
console.log("Open Ucampus");
orderPizza(pizzaIsReady);     // we cant use pizzaIsReady() as a function as it will stuck and produce error we have to pass the arugment as a callback

//