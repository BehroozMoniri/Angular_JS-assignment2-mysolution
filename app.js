(function () {
'use strict';
var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },{
    name: "Jam",
    quantity: "200"
  }
];

angular.module('ShoppingListApp', [])
.service('ShoppingListService', ShoppingListService)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
;
// .provider('ShoppingListProvider', ShoppingListProvider)
//.config(Config);

// Config.$inject = ['ShoppingListService'];
// function Config(ShoppingListService) {
//   ShoppingListService.defaults.maxItems = 50;
//   ShoppingListService.defaults.list1 = To_buy
// }

ToBuyController.$inject = ['ShoppingListService']; //= ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  buy_controller  = this
  buy_controller.items = ShoppingListService.getToBuyItems();
 
  buy_controller.removeItem = function (itemIndex) {
    ShoppingListService.changeItem(itemIndex );
  };

  // var list1 = this;
  // $scope.$To_buy.items = ShoppingListService.getToBuyItems();
  // $scope.$To_buy.itemName = "";
  // $scope.$To_buy.itemQuantity = "";
  // $scope.$To_buy.addItem = function () {
  //     ShoppingListService.addItem($scope.$To_buy.itemName, $scope.$To_buy.itemQuantity);
  // };
  // $scope.$To_buy.removeItem = function (itemIndex, x, y) { // list.itemName, list.itemQuantity
  //   ShoppingListService.removeItem(itemIndex, x, y);
  // };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];// = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var already_bought = this;
  already_bought.items = ShoppingListService.getBoughtItems();

  already_bought.getBought = function( index){
    already_bought.items = ShoppingListService.changeItem(index)
  }

  // $scope.addItem = function () {
  //   var newItem = {
  //     name: $scope.newItemName,
  //     quantity: $scope.newItemQuantity
  //   };

  //   $scope.bought.push(newItem);}

  // function addItem(itemName, quantity){
  //   var itemPassed = {
  //     name: itemName,
  //     quantity: quantity
  //   };
  //   already_bought.list.push(itemPassed)
  //   return already_bought.list
  // }
  // $scope.$bought.items = ShoppingListService.getBoughtItems();
  // $scope.$bought.itemName = "";
  // $scope.$bought.itemQuantity = "";
  // $scope.$bought.addItem = function () {
  //     ShoppingListService.addItem(bought.itemName, bought.itemQuantity);
  // };
  // bought.show = function () {
  //   bought.items = ShoppingListService.getBoughtItems();
  // }
}
// If not specified, maxItems assumed unlimited
function ShoppingListService($scope ) {
  var service = this;
  $scope.To_buy = [  { name: "Milk", quantity: "2"},
    {       name: "Donuts",
      quantity: "200"     },
    {       name: "Cookies",
      quantity: "300"     },
    {       name: "Chocolate",
      quantity: "5"     },{
      name: "Jam",  quantity: "200" } ];
  // List of shopping items
  
  var bought = []
  
  service.changeItem = function (itemIndex) {
    $scope.To_buy.splice(itemIndex, 1);
    var itemPassed =  $scope.To_buy[itemIndex]
    bought.push(itemPassed)
    $scope.bought = bought
  };

    service.getToBuyItems = function ($scope) {

    return $scope.To_buy ;
  };
    service.getBoughtItems = function ($scope ) {
      if (bought !== []) {
        $scope.bought = bought
      } else {
        $scope.bought = new Array()
      }
      return $scope.bought ;
  };
}


// function ShoppingListProvider(To_buy) {
//   var provider = this;

//   provider.defaults = {
//     maxItems: 100
//   };

//   provider.$get = function () {
//     var shoppingList = new ShoppingListService(provider.defaults.maxItems);

//     return shoppingList;
//   };
// }

})();
