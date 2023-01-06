class Control {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    upVolume(){
        this.volume += 2;
    }
    downVolume(){
        this.volume -= 2;
    }

    static tradePill(){
        console.log('Aye');
    }
}

const controle1 = new Control('LG');
