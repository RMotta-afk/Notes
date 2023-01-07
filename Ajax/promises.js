function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function waitHere (msg, time){
    return new Promise((resolve, reject) =>{
        if(typeof  msg !== 'string') reject('Bad Value');
        setTimeout(() => {
        resolve(msg);
    }, time);
    });



}

waitHere('Test1', random(1, 3))
    .then(response => {
        console.log(response);
        return waitHere('Test2', random(1,3));
    })
    .then(response => {
        console.log(response);
        return waitHere(123456789, random(1,3));
    })
    .then(response => {
        console.log(response);
    })
    .catch(e => {
        console.log('Erro:', e);
    });

