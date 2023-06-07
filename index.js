console.clear();

import { Shop } from "./js/Shop.js";

const pilnasBakas = new Shop();
// console.log(pilnasBakas);

console.log(`-------------`);

console.log(pilnasBakas.refill(50));
console.log(pilnasBakas.greeting('atiduok pinigus'));
console.log(pilnasBakas.allitems());
console.log(pilnasBakas.ItemPriceForCustomer());
console.log(pilnasBakas.itemQuantityInShop());
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





