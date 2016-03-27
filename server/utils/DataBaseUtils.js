import mongoose from "mongoose";

import config from '../../other/config.json';

import '../models/Article';

const article = mongoose.model('Article');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

//export function listArticles(id) {
export function listArticles() {
    return article.find();
}

export function createArticle(data) {

    const note = new article({
        available   : data.available  ,
        id          : data.id         ,
        vendorCode  : data.vendorCode ,
        name        : data.name       ,
        picture     : data.picture    ,
        url         : data.url        ,
        price       : data.price      ,
        categoryId  : data.categoryId ,
        vendor      : data.vendor     ,
        description : data.description,
        "param.color" : data.param.color,
        "param.size"  : data.param.size ,
        "param.material" : data.param.material,
        "param.composition" : data.param.composition,
        "param.season" : data.param.season,
        createdAt: new Date()
    });

    return article.save();
}

export function deleteArticle(id) {
    return article.findById(id).remove();
}

