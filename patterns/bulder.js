class Builder {
    constructor(type, doors) {
        this.type = type
    }
    setDoors(value) {
        this.doors = value
        return this
    }
    setEngine(value) {
        this.engine = value
        return this
    }
    build() {
        return this
    }

}

const car = new Builder('audy')
    .setEngine('v8')
    .setDoors(8)

console.log(car)

//


class OTG {
    constructor(model, color, maxTemperature, maxTimeSelection) {
        this.model = model;
        this.title = 'OTG';
        this.color = color;
        this.maxTemperature = maxTemperature || 150;
        this.maxTimeSelection = maxTimeSelection || 30;
    }
}



class OTGBuilder {
    constructor(model, color) {
        this.model = model;
        this.title = 'OTG';
        this.color = color;
    }
    setMaxTemperature(temp) {
        this.maxTemperature = temp;
        return this;
    }

    setMaxTimeSelection(maxTime) {
        this.maxTimeSelection = maxTime;
        return this;
    }

    build() {
        return new OTG(this.model, this.color,
            this.maxTemperature, this.maxTimeSelection);
    }
}

const basicOTG = new OTGBuilder('MorphyRichards', 'Black')
    .setMaxTimeSelection(11111)
    .build();

console.log(basicOTG );