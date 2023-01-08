function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)* min);
}

function waitThere(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
        reject('ERROR');
        return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Prom Done');
            return;
        }, time);
    });
}

// Promise.all 

// That kind of promise will try to resolve every situation, so if there's one of them who's not possible, it will return an error.

const promises = [
    waitThere('First Promise', 3500),
    waitThere('Second Promise', 1500),
    waitThere('Third Promise', 2000)
];

/* Promise.all(promises)
    .then((value) =>
    {
        console.log(value);
    })
    .catch((error) => {
        console.log(error)
    }) 

 Promise.race 

 It's a literal race. It will only returns the first right promise that it will be able to solve, in less time and easier. But if that first promise is wrong, it'll return an error. */

/* Promise.race(promises)
    .then((value) =>
    {
        console.log(value);
    })
    .catch((error) => {
        console.log(error)
    }) */

// Promise.resolve 

function upadatePage(){
    const inCache = true;

    if(inCache){
        return Promise.resolve('In CACHE');
    }
    else waitThere('I donwloaded It', 3000);
}

upadatePage()
    .then(pagData => {
        console.log(pagData)
    })
    .catch(e => console.log(e))

// Promise.reject