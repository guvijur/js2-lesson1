/*let audi = {
    color: "blue",
    wheels: 4,
    engine: {
        volume: 2.0,
        power: 225
    }
}*/

function Car(color, wheels, engine) {
    this.color = color;
    this.wheels = wheels;
    this.engine = engine;
}

let audi = new Car("blue", 4, {volume: 2.0, power: 225});
let bmw = new Car("black", 4, {volume: 2.5, power: 335});
