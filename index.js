require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const url = process.env.MONGODB_URI;

app.use(bodyParser.json());
Character = require('./models/character');
Skills = require('./models/skills');
Attributes = require('./models/attributes');

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB: ', error.message)
    });

const db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('<div>character basic data: /api/basics</div><div>character skills: /api/skills</div><div>character attributes: /api/attributes</div>');
});

app.get('/api/basics', function (req, res) {
    Character.getBasics(function (err, basics) {
        if (err) {
            throw err;
        }
        res.json(basics);
    });

});

app.get('/api/basics/:id', function (req, res) {
    Character.getBasicsById(req.params.id, function (err, basic) {
        if (err) {
            throw err;
        }
        res.json(basic);
    });

});

app.post('/api/basics', function (req, res) {
    const charbasics = req.body;
    Character.addBasics(charbasics, function (err, charbasics) {
        if (err) {
            throw err;
        }
        res.json(charbasics);
    });

});

app.put('/api/basics/:id', function (req, res) {
    const id = req.params.id;
    const basics = req.body;
    Character.updateBasics(id, basics, {}, function (err, basics) {
        if (err) {
            throw err;
        }
        res.json(basics);
    });

});

app.delete('/api/basics/:id', function (req, res) {
    const id = req.params.id;
    Character.deleteBasics(id, function (err, basics) {
        if (err) {
            throw err;
        }
        res.json(basics);
    });
});


app.get('/api/skills', function (req, res) {
    Skills.getSkills(function (err, skills) {
        if (err) {
            throw err;
        }
        res.json(skills);
    });

});

app.get('/api/skills/:id', function (req, res) {
    Skills.getSkillsById(req.params.id, function (err, charskills) {
        if (err) {
            throw err;
        }
        res.json(charskills);
    });

});

app.post('/api/skills', function (req, res) {
    const skills = req.body;
    Skills.addSkills(skills, function (err, skills) {
        if (err) {
            throw err;
        }
        res.json(skills);
    });
});

app.put('/api/skills/:id', function (req, res) {
    const id = req.params.id;
    const skills = req.body;
    Skills.updateSkills(id, skills, {}, function (err, skills) {
        if (err) {
            throw err;
        }
        res.json(skills);
    });

});

app.delete('/api/skills/:id', function (req, res) {
    const id = req.params.id;
    Skills.deleteSkills(id, function (err, skills) {
        if (err) {
            throw err;
        }
        res.json(skills);
    });
});

app.get('/api/attributes', function (req, res) {
    Attributes.getAttributes(function (err, attributes) {
        if (err) {
            throw err;
        }
        res.json(attributes);
    });

});

app.get('/api/attributes/:id', function (req, res) {
    Attributes.getAttributesById(req.params.id, function (err, charattributes) {
        if (err) {
            throw err;
        }
        res.json(charattributes);
    });

});

app.post('/api/attributes', function (req, res) {
    const attributes = req.body;
    Attributes.addAttributes(attributes, function (err, attributes) {
        if (err) {
            throw err;
        }
        res.json(attributes);
    });

});

app.put('/api/attributes/:id', function (req, res) {
    var id = req.params.id;
    const attributes = req.body;
    Attributes.updateAttributes(id, attributes, {}, function (err, attributes) {
        if (err) {
            throw err;
        }
        res.json(attributes);
    });

});

app.delete('/api/attributes/:id', function (req, res) {
    const id = req.params.id;
    Attributes.deleteAttributes(id, function (err, attributes) {
        if (err) {
            throw err;
        }
        res.json(attributes);
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

