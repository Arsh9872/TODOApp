// function orderPizza(callback) {
//     console.log("Preparing");
//     setTimeout(() => {
//         // console.log("Pizza prepared");
//         // pizzaIsReady();
//         callback();
//     }, 5000);
    
// }


// function pizzaIsReady() {
//     console.log("Pizza prepared");
    
// }
// console.log("Open Ucampus");
// orderPizza(pizzaIsReady);     // we cant use pizzaIsReady() as a function as it will stuck and produce error we have to pass the arugment as a callback

// Callback hell or pyramid of doom      == one function will call another function and call another function and go on
// function method1(callback) {
// ....callback(method2(callback2))
// .........method3(callback3)
//   }

/*

function getLocation(){
    function getLAtLong(){
        function getWeather(){
            function getWeatherDetails(){
                .....
            }
        }
    }
}

*/

//Promise

//Promise Maker

//Promise Receiver

// states of promise

// Pending , Resolved , Rejected

function getWeather() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Winter");     // for resolve
            // reject("no weather data");   // for rejectioon
        },3000);
    });
}

function getWeatherDetails(data) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            switch (data) {
                case "Rainy":
                    resolve("Rainy weather data");
                    break;
                case "Summer":
                    resolve("Summer weather data");
                    break;
                default:
                    reject("No data available");
            }
        });
    });
}

const onSuccess = function method1(data){
    console.log("onfullfilled",data);
};

const onError = function method2(data){
    console.log("onrejected",data);
}
getWeather().then(getWeatherDetails).then(onSuccess).catch(onError);

// getWeather().then(      // first function is runs "on acceptance"    // 2nd function "On Rejection"
//     function method1(data) {
//         console.log("OnFulfilled",data);
//     })
   
//     .catch(function method2(data){
//         console.log("onRejected",data);
//     }
// )