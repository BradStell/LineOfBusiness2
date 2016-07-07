(function() {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        productResource.query(function(data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());

/*
[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2009",
        "description": "Leaf rake with 48-inch handle",
        "cost": 9.00,
        "price": 19.95,
        "category": "garden",
        "tags": [ "leaf", "tool" ],
        "imageUrl": "images/leaf-rake.jpg"
    },
    {
        "productId": 2,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "March 21, 2013",
        "description": "curved claw steel hammer",
        "cost": 1.00,
        "price": 8.99,
        "category": "toolbox",
        "tags": [ "tool" ],
        "imageUrl": "images/hammer.png"
    }
]*/
