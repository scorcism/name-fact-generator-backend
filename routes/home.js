const url = require('url');
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
    },
    {
        How_to_use_v1 : `Send a POST req to the url../api/v1/fact with body content in application/JSON format as {"name": "Abhishek", "gender":"m"} `,
        v2: `Send a GET request with name and gender at: ../api/v2/fact/?name=Abhishek&gender=S `
    }
    ]
    res.json(line)
})


module.exports = router