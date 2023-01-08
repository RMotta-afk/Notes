function rand(min = 0, max = 3){
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

/* waitThere('Part 1', rand())
    .then(phase => {
        console.log(phase)
        return waitThere('Part 2', rand());
    })
    .then(phase => {
        console.log(phase);
        return waitThere('Part 3', rand());
    })
    .then(phase => {
        console.log(phase);
        return phase;
    })
    .then(phase => {
        console.log('End at phse: ', phase)
    })
    .catch(e => console.log(e)); */

// As you can see, that code is massive! So we need to use the async await words, just to have a clean and better code. What I learn from here was that promises are used because they can delay the necessary parts of the code and avoid problems with inicialization. 

async function initialize (){
    try {
        const return1 = await waitThere('Return 1', rand());
        console.log(return1);
     
        const return2 = await waitThere(2, rand());
        console.log(return2);
     
        const return3 = await waitThere('Return 3', rand());
        console.log(return3);
     
        console.log('End on phase: ', return3);
    } catch(e){
        console.log(e);
    }
}

initialize();

// A promisse has three states. 

/* 
Pending -> A promise who's being executed and didn't returned it's value yet.

Fulfilled -> A resolved promise with a returned value.

Rejected -> An error.
*/