class Dispositivo {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }
        
        this.ligado = false;
    }
}

class Smartphone extends Dispositivo {

}

const s1 = new Smartphone('Iphone');
console.log(s1);