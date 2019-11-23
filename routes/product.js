var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res, next) {
  Product.find(function(err, docs)
  {
    var productChunks = [];
    var chunkSize =3;
    for(var i = 0; i < docs.length; i+= chunkSize)
    {
      productChunks.push(docs.slice(i, i+ chunkSize));
    }
       
    res.render('product', { title: 'Best Store', products: productChunks});
  });
  
});

router.get('/asc', function(req, res, next) {
  Product.find().sort({price: 1}).exec(function(err, docs)
  {
    var productChunks = [];
    var chunkSize =3;
    
    for(var i = 0; i < docs.length; i+= chunkSize)
    {
      productChunks.push(docs.slice(i, i+ chunkSize));
    }
       
    res.render('product', { title: 'Best Store', products: productChunks});
  });
  
});

router.get('/desc', function(req, res, next) {
  Product.find().sort({price: -1}).exec(function(err, docs)
  {
    var productChunks = [];
    var chunkSize =3;
    
    for(var i = 0; i < docs.length; i+= chunkSize)
    {
      productChunks.push(docs.slice(i, i+ chunkSize));
    }
       
    res.render('product', { title: 'Best Store', products: productChunks});
  });
  
});

router.get('/nameaz', function(req, res, next) {
  Product.find().sort({name: -1}).exec(function(err, docs)
  {
    var productChunks = [];
    var chunkSize =3;
    
    for(var i = 0; i < docs.length; i+= chunkSize)
    {
      productChunks.push(docs.slice(i, i+ chunkSize));
    }
       
    res.render('product', { title: 'Best Store', products: productChunks});
  });
  
});

router.get('/nameza', function(req, res, next) {
  Product.find().sort({name: 1}).exec(function(err, docs)
  {
    var productChunks = [];
    var chunkSize =3;
    
    for(var i = 0; i < docs.length; i+= chunkSize)
    {
      productChunks.push(docs.slice(i, i+ chunkSize));
    }
       
    res.render('product', { title: 'Best Store', products: productChunks});
  });
  
});


module.exports = router;
