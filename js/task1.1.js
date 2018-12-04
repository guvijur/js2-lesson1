/*
Улучшить базовый класс, добавив в него общий для всех метод remove(), который удаляет соответствующий DOM-узел.
*/
// Просто копируем сюда код, который писали на вебинаре. Но только не из методички,
// там есть ошибки.
/*
Надо с помощью JS создать в документе меню.
*/

// Нужно создать класс (ФК). Назову её не так, как в методичке. Так будет легче понять.
function divCreate () {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}
// Как написано в методичке - это мы создали некую высокоуровневую сущность,
// от которой будут наследоваться другие узконаправленные блоки.
// Нам нужен метод, который будет возвращать готовый HTML-код, который
// можно вставить в DOM.
// Напишем блок кода для отрисовки самого меню
// В методичке, кстати, есть не фиговая такая ошибка!!!
// ФЛ Menu()
function Menu(myId, myClassName, myItems) {
    // Вызываем главную ФК
    divCreate.call(this);
    this.id = myId;
    this.className = myClassName;
    this.items = myItems;
}
// Добавляем метод render для Menu.
Menu.prototype = Object.create(divCreate.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function() {
    let result = '<ul class="' + this.className + '" id="' + this.id + '">';
    for (let item in this.items) {
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        }
    }
    result += "</ul>";
    return result;
}
// Добавляем метод removeMenu для Menu
Menu.prototype.removeMenu = function() {
    // Тут просто надо найти в DOM объект по id и удалить его.
    document.getElementById('menuId').remove();
}

//Функция конструктор для пункта меню
//Отрисовывает конкретный пункт
function MenuItem(myHref, myName) {
    divCreate.call(this);
    this.className = "menuItem";
    this.href = myHref;
    this.name = myName;
}
// Добавляем метод render для MenuItem. А это, как я понял, пример полиморфизма.
MenuItem.prototype = Object.create(divCreate.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
    return '<li class="' + this.className + '"><a href="' + this.href + '">' + this.name + '</li>';
}
// Создаём пункты меню
let mItem1 = new MenuItem("/", "Главная");
let mItem2 = new MenuItem("/about", "О нас");
let mItem3 = new MenuItem("/contacts", "Контакты");
let mItems = {0: mItem1, 1: mItem2, 2: mItem3};

let menu = new Menu("menuId", "menuClass", mItems);
console.log(menu.render());
let div = document.write(menu.render());
let nav = document.createElement('nav');
document.body.appendChild(nav);
document.getElementsByTagName('nav')[0].innerHTML = menu.render();

document.getElementById('btn').addEventListener('click', menu.removeMenu);

