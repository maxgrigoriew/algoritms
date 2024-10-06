class Adapter {
    constructor(card) {
        this.card = card
    }

    connectCard() {
        this.card.connect()
    }
}

class USB {
    connectUSB() {
        console.log('connect to USB');
    }
}

const card = new Adapter(new USB())

card.connectCard()

