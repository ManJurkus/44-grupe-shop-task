export class Shop2 {
    constructor(Prekes_kodas, Prekes_pavadinimas ) {
        this.shopName = "Pilnas Bakas";
        this.currency = "$";
        this.itemId = Prekes_kodas;
        this.itemName = Prekes_pavadinimas;
        this.itemBuyCost = 1;
        this.itemSell = 2;
        this.itemQuantity = 0;
        this.itemSoldQuantity = 0;
        this.itemRefill = 0;
        this.itemdestroyed = 0;
        this.itemProfitUnit = this.itemSell - this.itemBuyCost;
        this.itemProfitAll = 0;
        


    }

    refill(quantity){
        this.itemRefill += quantity;
        this.itemQuantity += quantity;
        return 'Inventorius papildytas ' + quantity + ' vnt';
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

    profit() {
        this.itemProfitAll += this.itemSoldQuantity + this.itemProfitUnit;
        

    }

    // balance() {
    //     this.itembalance = this.itemProfitAll - (this.itemQuantity + this.itemdestroyed) * this.itemBuyCost 
    //     return this.itembalance
    // }

}