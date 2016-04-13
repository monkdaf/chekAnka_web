import mongoose from "mongoose";

import config from '../../other/config.json';

import '../models/Article';

const Article = mongoose.model('Article');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

//export function listArticles(id) {
export function listArticles() {
    //createArticle_StartUp();
    return Article.find();
}

export function createArticle(data) {

    const article = new Article({
        available   : data.available  ,
        id          : data.id         ,
        vendorCode  : data.vendorCode ,
        name        : data.name       ,
/*        picture     : data.picture    ,
        url         : data.url        ,
        price       : data.price      ,
        categoryId  : data.categoryId ,
        vendor      : data.vendor     ,
        description : data.description,
        "param.color" : data.param.color,
        "param.size"  : data.param.size ,
        "param.material" : data.param.material,
        "param.composition" : data.param.composition,
        "param.season" : data.param.season,*/
        createdAt: new Date()
    });

    return article.save();
}

export function deleteArticle(id) {
    return Article.findById(id).remove();
}

function createArticle_StartUp() {

    const article1 = new Article({
        available   : true  ,
        id          : "999999"         ,
        vendorCode  : "9999" ,
        name        : "Тестовая запись"       ,
      /*  picture     : data.picture    ,
        url         : data.url        ,
        price       : data.price      ,
        categoryId  : data.categoryId ,
        vendor      : data.vendor     ,
        description : data.description,
        "param.color" : data.param.color,
        "param.size"  : data.param.size ,
        "param.material" : data.param.material,
        "param.composition" : data.param.composition,
        "param.season" : data.param.season,*/
        createdAt: new Date()
    });

    return article1.save();
}
