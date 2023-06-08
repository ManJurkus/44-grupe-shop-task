console.clear();

import { Shop } from "./js/Shop.js";
import { Shop2 } from "./js/Shop2.js";

const pilnasBakas = new Shop();
const pilnasBakas2 = new Shop2();

// console.log(pilnasBakas);

console.log(`-------------`);

console.log(pilnasBakas.refill(50));
console.log(pilnasBakas.greeting('atiduok pinigus'));
console.log(pilnasBakas.allitems(`kokiu prekiu turi?`));
console.log(pilnasBakas.ItemPriceForCustomer(`kiek kainuoja?`));
console.log(pilnasBakas.itemQuantityInShop(`koks likutis?`));
console.log(pilnasBakas.customerBuy(2));
console.log(pilnasBakas.itemQuantityInShop());
console.log(pilnasBakas.customerBuy(3));
console.log(pilnasBakas.itemSoldQuantity);
console.log(pilnasBakas.customerBuy(50));
console.log(pilnasBakas.itemQuantityInShop());
console.log(pilnasBakas.customerBuy(40));
// console.log(pilnasBakas.customerBuy(1));
console.log(pilnasBakas.itemQuantityInShop());
console.log(pilnasBakas.destroy(5));
console.log(pilnasBakas.itemProfitUnit);
console.log(pilnasBakas.itemdestroyed);

console.log(`-------------`);

console.log(pilnasBakas.itemProfitUnit);
console.log(pilnasBakas.itemSoldQuantity);
console.log(pilnasBakas.itemProfitAll);

console.log(pilnasBakas.itemProfitUnit * pilnasBakas.itemSoldQuantity);

console.log(pilnasBakas.profit());
console.log(`-------------`);


console.log(pilnasBakas.balance());

// console.log(pilnasBakas.itemSoldQuantity);
// console.log(pilnasBakas.itemProfitAll);


// const productID = pilnasBakas.itemId;
// const productName = pilnasBakas.itemName;

// console.table([productID, productName]);

console.log(`-------------`);

// const productID2 = new Shop2(1, 'huba buba')

// console.table([productID2]);

// const productID = new Shop();
// console.table([productID]);






  




