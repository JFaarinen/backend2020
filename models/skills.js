const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema({
    char_name: String,
    awe: { rank: String, favoured: Boolean },
    athletics: { rank: String, favoured: Boolean },
    awarness: { rank: String, favoured: Boolean },
    explore: { rank: String, favoured: Boolean },
    song: { rank: String, favoured: Boolean },
    craft: { rank: String, favoured: Boolean },
    inspire: { rank: String, favoured: Boolean },
    travel: { rank: String, favoured: Boolean },
    insight: { rank: String, favoured: Boolean },
    healing: { rank: String, favoured: Boolean },
    courtesy: { rank: String, favoured: Boolean },
    battle: { rank: String, favoured: Boolean },
    persuade: { rank: String, favoured: Boolean },
    stealth: { rank: String, favoured: Boolean },
    search: { rank: String, favoured: Boolean },
    hunting: { rank: String, favoured: Boolean },
    riddle: { rank: String, favoured: Boolean },
    lore: { rank: String, favoured: Boolean }
});

const Skills = module.exports = mongoose.model('Skills', skillsSchema);

//Get Skills
module.exports.getSkills = function (callback, limit) {

    Skills.find(callback).limit(limit);
}

//Get Skills
module.exports.getSkillsById = function (id, callback) {

    Skills.findById(id, callback);
}

//Add Characters Skills
module.exports.addSkills = function (skills, callback) {

    Skills.create(skills, callback);
}

//Update Characters Skills
module.exports.updateSkills = function (id, skills, options, callback) {
    const query = { _id: id };
    const update = {
        char_name: skills.char_name,
        awe: skills.awe,
        athletics: skills.athletics,
        awarness: skills.awarness,
        explore: skills.explore,
        song: skills.song,
        craft: skills.craft,
        inspire: skills.inspire,
        travel: skills.travel,
        insight: skills.insight,
        healing: skills.healing,
        courtesy: skills.courtesy,
        battle: skills.battle,
        persuade: skills.persuade,
        stealth: skills.stealth,
        search: skills.search,
        hunting: skills.hunting,
        riddle: skills.riddle,
        lore: skills.lore
    }

    Skills.findOneAndUpdate(query, update, options, callback);
}

//Delete Characters Skills
module.exports.deleteSkills = function (id, callback) {
    const query = { _id: id };
    Skills.remove(query, callback);
}