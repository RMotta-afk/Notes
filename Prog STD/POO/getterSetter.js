const _velocity = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocity] = 0;
    }

    set velocity(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocity] = valor;
    }

    get velocity(){
        return this[_velocity];
    }

    acelerar(){
        if(this[_velocity] >= 100) return;
        this[_velocity]++;
    }
    freiar(){
        if(this[_velocity] >= 0) return;
        this[_velocity]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <=200; i++){
    c1.acelerar();
}

console.log(c1);