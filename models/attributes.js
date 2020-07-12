const mongoose = require('mongoose');

const attributesSchema = mongoose.Schema({
    char_name: String,
    body: { base: String, favoured: String },
    heart: { base: String, favoured: String },
    wits: { base: String, favoured: String },
    exp: { unused: String, total: String },
    valour: String,
    wisdom: String,
    endurance: { rating: String, current: String, fatique: String },
    hope: { rating: String, current: String, shadow: String }
});

const Attributes = module.exports = mongoose.model('Attributes', attributesSchema);

//Get Attributes
module.exports.getAttributes = function (callback, limit) {

    Attributes.find(callback).limit(limit);
}

//Get Characters Attributes
module.exports.getAttributesById = function (id, callback) {

    Attributes.findById(id, callback);
}

//Add Characters Attributes
module.exports.addAttributes = function (attributes, callback) {

    Attributes.create(attributes, callback);
}

//Update Characters Attributes
module.exports.updateAttributes = function (id, attributes, options, callback) {
    const query = { _id: id };
    const update = {
        char_name: attributes.char_name,
        body: attributes.body,
        heart: attributes.heart,
        wits: attributes.wits,
        exp: attributes.exp,
        valour: attributes.valour,
        wisdom: attributes.wisdom,
        endurance: attributes.endurande,
        hope: attributes.hope
    }

    Attributes.findOneAndUpdate(query, update, options, callback);
}

//Delete Characters Attributes
module.exports.deleteAttributes = function (id, callback) {
    const query = { _id: id };
    Attributes.remove(query, callback);
}