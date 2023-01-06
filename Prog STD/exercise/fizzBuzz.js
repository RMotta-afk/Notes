function returnNumber (e){
    if (typeof e !== 'number') return NaN;
    if (e % 5 === 0 && e % 3 === 0)return 'FizzBuzz';
    if (e % 5 === 0) return 'Buzz';
    if (e % 3 === 0) return 'Fizz';

    return e;

};

for (let i = 0; i <=100; i++){
    console.log(i, returnNumber(i))
}
