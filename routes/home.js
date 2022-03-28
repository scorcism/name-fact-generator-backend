const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    line = [{
        Author: "Abhishek Pathak",
        Project: "Name Fact Generator",
        FrontEnd: ""
    },
    {
        Instagram: "https://www.instagram.com/scor.cism/",
        Github: "https://github.com/scorcism",
        alias: "scorcism"
    }
    ]
    res.json(line)
})


module.exports = router