import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    available : {type: Boolean },
    id      :{type: Number },
    vendorCode   : { type: String }, // ID from ChekAnka
    name     : { type: String, required: true }, // название товара
    picture : { type: String }, // изображение, для начала только одно
    url     : { type: String },
    price   : {type: Number }, //цена в грн
    categoryId  :{type: Number },
    vendor : { type: String }, // бренд
    description : { type: String },
    param:  {
        color     : { type: String },
        size     : { type: String },
        material     : { type: String }, // тип ткани (например "вельвет")
        composition     : { type: String }, // состав (например "хлопок")
        season     : { type: String },
    },
    createdAt : { type: Date }
});

mongoose.model('Article', ArticleSchema);
