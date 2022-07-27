class Good {

    constructor(name, description, sizes, price) {

        // this.id = id;                     //Код товара
        this.name = name;                   //Наименование
        this.description = description;     //Описание
        this.sizes = sizes;                 //массив возможных размеров
        this.price = price;                 //цена товара
        this.available = false;             //Признак доступности для продажи
    }

    setId(id) {
        this.id = id;
    }

    setAvailable(someVar) {//изменение признака доступности для продажи
        this.available = someVar;
    }
       //конструктор экземпляра товара принимающий параметры соответствующие свойствам выше
        //   

}

// class GoodsList {

//     #goods       //массив экземпляров объектов класса Good (приватное поле)
//     filter       //регулярное выражение используемое для фильтрации товаров по полю name  - filter.test(good.name) /<regexp>/<flags>
//     sortPrice    //булево значение, признак включения сортировки по полю Price
//     sortDir      //булево значение, признак направления сортировки по полю Price (true - по возрастанию, false - по убыванию)

//     get list()     //возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price
//     add()          //добавление товара в каталог
//     remove(id)     //удаление товара из каталога по его id

// }

// class BasketGood дочерний() {

//     goods       //массив объектов класса BasketGood для хранения данных о товарах в корзине

// }

class GoodsList {
    #goods = [];
    #num_goods = {};
    constructor () {
        this.filter = new RegExp("","ig");
        this.sortPrice = true;
        this.sortDir = false;
    }

    add (...items) {
        for (let item of items) {
            this.index = this.#goods.length;
            item.setId(this.index);
            item.setAvailable(true);
            this.#goods.push(item);
            this.#num_goods[item.id] = this.index;
        }
    }

    remove(id) {
        delete this.#goods[this.#num_goods[id]];
        delete this.#num_goods[id];
    }

    get list() {
        this.temp = this.#goods.filter(good => this.filter.test(good.name))
        if (this.sortPrice) {
            if (this.sortDir) {
                this.temp.sort((item1, item2) => item1.price - item2.price)
            } else {
                this.temp.sort((item1, item2) => item2.price - item1.price)
            }
        }
        return this.temp
    }

}


class BasketGood extends Good {
    constructor (good) {
        super(good.name, good.description, good.sizes, good.price);
        this.id = good.id
        this.amount = 0;
    }

}


class Basket {
    constructor () {
        this.goods = [];
        this.num_basket = {};
    }

    add (good, amount) {
        if (this.num_basket[good.id]) {
            this.goods[this.num_basket[good.id]].amount += amount
        } else {
            good.amount = amount
            let index = this.goods.length;
            this.goods.push(good);
            this.num_basket[good.id] = index;
        }
    }

    remove(good, amount) {
        if (this.goods[this.num_basket[good.id]].amount > amount) {
            this.goods[this.num_basket[good.id]].amount -= amount
        } else {
            delete this.goods[this.num_basket[good.id]];
            delete this.num_basket[good.id];
        }
    }

    clear() {
        this.goods.length = 0;
        this.num_basket = {};
    }

    removeUnavailable() {
        this.goods.forEach((good) => {
            if (good.available === false) {
                delete this.goods[this.num_basket[good.id]];
                delete this.num_basket[good.id];
            }
        });
    }


    get totalSum() {
        return this.goods.reduce((sum, good) => {sum += good.price*good.amount; return sum}, 0)
    }
    get totalAmount() {
        let sum = 0;
        this.goods.forEach(good => {sum += good.amount});
        return sum
    }

}

let catalog = new GoodsList();

let pos1 = new Good("Пиджак", 'Одежда', [34, 35, 42], 5000);
let pos2 = new Good("Брюки", 'Одежда', [34, 35, 42], 2000);
let pos3 = new Good("Футболка", 'Одежда', [34, 35, 42], 1200);
let pos4 = new Good("Шорты", 'Одежда', [34, 35, 42], 900);
let pos5 = new Good("Кроссовки", 'Обувь', [34, 35, 42], 3500);


catalog.add(pos1, pos2, pos3, pos4, pos5);

console.log(catalog.list);

// catalog.remove(3)
// console.log(catalog.list)

let bskt = new Basket()
bskt.add(pos1, 4)
bskt.add(pos4, 10)

console.log(`Корзина: Позиций - ${bskt.totalAmount}шт., итоговая сумма - ${bskt.totalSum}`)

bskt.remove(pos1, 2)

console.log(`Корзина после редактирования: Позиций - ${bskt.totalAmount}шт., итоговая сумма - ${bskt.totalSum}`)

bskt.clear()

console.log(`Очистка корзины завершена: Позиций - ${bskt.totalAmount}шт., итоговая сумма - ${bskt.totalSum}`)