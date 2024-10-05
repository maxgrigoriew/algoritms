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

const car = new Builder('audy').setEngine('v8')

console.log(car);