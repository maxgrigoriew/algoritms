class Adapter {
    constructor(iphone) {
        this.iphone = iphone;
    }

    connectUsb() {
        this.iphone.connect();
    }
}

class Iphone {
    connect() {
        console.log('connect to Iphone');
    }
}

class Samsung {
    connectUsb() {
        console.log('connect to Samsung');
    }
}

const iphone = new Iphone();
const samsung = new Samsung();
const samsungWithAdapter = new Adapter(new Iphone())

samsungWithAdapter.connectUsb()

iphone.connect();
samsung.connectUsb();



