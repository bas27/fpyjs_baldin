const goods = [
  {
    id: 1, //Код товара
    name: "Пиджак", //Наименование
    description: "Одежда", //Описание
    sizes: 48, //массив возможных размеров
    price: 5000, //цена товара
    available: true, //Признак доступности для продажи
  },

  {
    id: 2, //Код товара
    name: "Брюки", //Наименование
    description: "Одежда", //Описание
    sizes: 34, //массив возможных размеров
    price: 2000, //цена товара
    available: true, //Признак доступности для продажи
  },

  {
    id: 3, //Код товара
    name: "Футболка", //Наименование
    description: "Одежда", //Описание
    sizes: 48, //массив возможных размеров
    price: 1200, //цена товара
    available: true, //Признак доступности для продажи
  },

  {
    id: 4, //Код товара
    name: "Шорты", //Наименование
    description: "Одежда", //Описание
    sizes: 33, //массив возможных размеров
    price: 900, //цена товара
    available: true, //Признак доступности для продажи
  },

  {
    id: 5, //Код товара
    name: "Кроссовки", //Наименование
    description: "Обувь", //Описание
    sizes: 42, //массив возможных размеров
    price: 3500, //цена товара
    available: true, //Признак доступности для продажи
  },
];

const basket = [
  {
    good: 5, //ссылка на товар в каталоге
    amount: 1, //количество товара в корзине
  },

  {
    good: 3, //ссылка на товар в каталоге
    amount: 2, //количество товара в корзине
  },
];

function addGood(goodId, amount) {
  marker = 0;
  for (let i of goods) {
    if (i.id == goodId) {
      for (let n = 0; n < basket.length; n++) {
        if (goodId == basket[n].good) {
          marker = 1;
          basket[n].amount += amount;
          console.log(
            `К выбранному ранее: ${i.name},`,
            `Добавили, шт: ${amount},`,
            `Количество в корзине: ${basket[n].amount}`
          );
        }
      }

      if (marker == 0) {
        marker = 2;
        var newObj = {
          good: goodId,
          amount: amount,
        };
        basket.push(newObj);

        console.log(`Добавлена позиция: ${i.name},`, `Количество: ${amount}`);
      }
    }
  }
  if (marker == 0) {
    console.log(`Товар c ИД ${goodId} отсутствует в каталоге`);
  }
}

function removePos(goodId) {
    
//     for (let n=0; n < basket.length; n++) {
//         if (goodId == basket[n].good) {
//             delete basket[n]
//             console.log('Заданная позиция удалена')
//         }
// }
  let i = basket.findIndex((good) => good.good == goodId);
    if(i >= 0) {
      basket.splice(i,1);
      }
      console.log('Заданная позиция удалена')
      console.log(basket)
}

function clearBasket(some_array) {
  some_array = null;
}
function sum() {
  // return arr.reduce((acc, num) => acc.amount*acc.price + num);
  let totalSumm = 0;

  for (let i = 0; i < basket.length; i++) {
    for (let n = 0; n < goods.length; n++) {
      if (basket[i].good == goods[n].id) {
        var mySum = basket[i].amount * goods[n].price;
        totalSumm += mySum;
      }
    }
  }
  return totalSumm;
}

  function total(arr) {

    result = {
      totalAmount: arr.length,           //Общее количество товаров в корзине
      totalSumm: sum(),                  //Общая стоимость товаров в корзине
    }
    console.log(result)
}

addGood(5, 2);

addGood(1, 8);

removePos(5)

clearBasket(basket)

total(basket)
