export class Shop {
    constructor() {
        this.shopName = "Mano parduotuve";
        this.currency = "$";
        this.itemId = "1";
        this.itemName = "Hubba Bubba extra long exstra strong flavor gum";
        this.itemBuyCost = 1;
        this.itemSell = 2;
        this.itemQuantity = 0;
        this.itemSoldQuantity = 0;
        this.itemRefill = 0;
        this.itemdestroyed = 0;

    }

    refill(fillitem){
        this.itemRefill += fillitem;
        this.itemQuantity += fillitem;
        return 'Inventorius papildytas ' + fillitem + ' vnt';
    }


    greeting(){
        return "Sveiki atvyke i " + this.shopName + "!"
    }

    allitems() {
        return "Turime " + this.itemName 
    }

    ItemPriceForCustomer() {
        return "Vieneto kaina butu: " +this.itemSell + " " + this.currency;
    }

    itemQuantityInShop() {
        if (this.itemQuantity === 0) {
            return 'Sios prekes nebeturime'
        }
        else {
            return this.itemQuantity + ' vnt';
        }
    }

    customerBuy(quantity){
        if (this.itemQuantity === 0) {
            return 'Sios prekes nebeturime';
        }
        if (this.itemQuantity < quantity) {
            return 'Deja sios prekes tiek neturime, likutis yra ' + this.itemQuantity + ' vnt';
        }

        this.itemQuantity -= quantity;
        this.itemSoldQuantity += quantity;
        let totalprise = this.itemSell * quantity;
        return 'Is viso butu ' + totalprise + ' ' + this.currency;

    }

    destroy(quantity) {
        if (this.itemQuantity === 0) {
            return 'Sios prekes likucio nebera';
        }
        if (this.itemQuantity < quantity) {
            return 'Deja sios prekes tiek nera, likutis yra ' + this.itemQuantity + ' vnt';
        }
        this.itemdestroyed += this.itemQuantity - quantity;
        this.itemQuantity -= quantity;

        return 'Isimta is prekybos ' + quantity + ' vnt. Liko prekyboje ' + this.itemQuantity + ' vnt';

    }

}