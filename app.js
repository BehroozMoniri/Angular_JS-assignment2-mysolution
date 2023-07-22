(function () {
'use strict';
angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
var toBuyList = this;

toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

toBuyList.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
var alreadyBougthList = this;

alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
var service = this;
var toBuyItems = [
    { name: "potatos", quantity: 7 },
    { name: "pasta", quantity: 11 },
    { name: "Cola", quantity: 5 },
    { name: "pepperoni", quantity: 6},
    { name: "pizza", quantity: 9 }
];
var alreadyBoughtItems = [];

service.buyItem = function(itemIndex) {
    var item = toBuyItems[itemIndex];

    alreadyBoughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
};

service.getToBuyItems = function() {
    return toBuyItems;
};

service.getAlreadyBoughtItems = function() {
    return alreadyBoughtItems;
};
}

 
})();

