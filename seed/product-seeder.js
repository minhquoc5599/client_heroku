var Product =require('../models/product');

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/product', {useNewUrlParser: true});


var products =[
    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/19.jpg',
        id: '01',
        name: 'Áo sơ mi nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 500000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/21.jpg',
        id: '02',
        name: 'Giày lười nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 300000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/24.jpg',
        id: '03',
        name: 'Áo khoác nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 600000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/7.jpg',
        id: '04',
        name: 'Áo sơ mi nam mỏng',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 400000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/22.jpg',
        id: '05',
        name: 'Giày nữ',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 200000
    }),
    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/25.jpg',
        id: '06',
        name: 'Áo khoác nam không tay',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 700000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/20.jpg',
        id: '07',
        name: 'Áo sơ mi nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 1000000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/23.jpg',
        id: '08',
        name: 'Giày thể thao nam',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 900000
    }),

    new Product({
        image: 'https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/26.jpg',
        id: '09',
        name: 'Áo khoác ngoài',
        description: 'Sang trọng, phong cách mạnh mẽ',
        price: 1200000
    }),

];

var done = 0;
for(var i = 0; i < products.length; i++)
{
    products[i].save(function(err,result)
    {
        done++;
        if(done === products.length)
        {
            exit();
        }
    });
}

function exit()
{
    mongoose.disconnect();
}

