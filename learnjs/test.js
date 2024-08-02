function orderPizza() {
    console.log("Preparing");
    setTimeout(() => {
        // console.log("Pizza prepared");
        pizzaIsReady();
    }, 5000);
    
}


function pizzaIsReady() {
    console.log("Pizza prepared");
    
}
console.log("Open Ucampus");
orderPizza();