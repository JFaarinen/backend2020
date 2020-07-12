const mongoose = require('mongoose');

const basicsSchema = mongoose.Schema({
    name: { type: String },
    culture: { type: String },
    blessing: { type: String },
    living: { type: String },
    calling: { type: String },
    weakness: { type: String },
    specialities: { type: [String] },
    features: { type: [String] }

});

const Basics = module.exports = mongoose.model('Basics', basicsSchema);

//Get Characters
module.exports.getBasics = function (callback, limit) {

    Character.find(callback).limit(limit);
}

//Get Character by Id
module.exports.getBasicsById = function (id, callback) {

    Character.findById(id, callback);
}

//Add Characters Basic information
module.exports.addBasics = function (basics, callback) {

    Character.create(basics, callback);
}

//Update Characters Basic Attributes
module.exports.updateBasics = function (id, basics, options, callback) {
    const query = { _id: id };
    const update = {
        name: basics.name,
        culture: basics.culture,
        blessing: basics.blessing,
        living: basics.living,
        calling: basics.calling,
        weakness: basics.weakness,
        specialities: basics.specialities,
        features: basics.features
    }

    Character.findOneAndUpdate(query, update, options, callback);
}

//Delete Characters Basic Attributes
module.exports.deleteBasics = function (id, callback) {
    const query = { _id: id };
    Character.remove(query, callback);
}