/*let audi = {
    color: "blue",
    wheels: 4,
    engine: {
        volume: 2.0,
        power: 225
    }
}*/

/*function Car(color, wheels, engine) {
    this.color = color;
    this.wheels = wheels;
    this.engine = engine;
}

let audi = new Car("blue", 4, {volume: 2.0, power: 225});
let bmw = new Car("black", 4, {volume: 2.5, power: 335});
*/
/*
function Vehicle() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.color = "white";
    
}

Vehicle.prototype.move = function(x, y ,z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function Car() {
    Vehicle.call(this);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let audi = new Car();
*/

function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}

Container.prototype.render = function() {
    return this.htmlCode;
};

function Menu(myId, myClassName, myItems) {
    Container.call(this);
    this.id = myId;
    this.className = myClassName;
    this.items = myItems;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function() {
let result = '<ul class="' + this.className + '" id="' + this.id + '">';
    for(let item in this.items) {
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        }
    }
    result += '</ul>';
    return result;
}

function MenuItem(myHref, myName) {
    Container.call(this);
    //this.id = myId;
    this.className = "menu-item";
    this.href = myHref;
    this.name = myName;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
    return '<li class="' + this.className + '">' + this.name + '</li>';
}

let mItem1 = new MenuItem("/", "Главная");
let mItem2 = new MenuItem("/about", "О нас");
let mItem3 = new MenuItem("/contacts", "Контакты");
let mItems = {0: mItem1, 1: mItem2, 2: mItem3};

let menu = new Menu("myMenu", "myClassName", mItems);
document.write(menu.render());


















