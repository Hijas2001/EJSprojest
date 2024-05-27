const { render } = require("ejs")
const { response } = require("express")
const axios = require("axios");

exports.homeRouter = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            // Render the index template with users data
            res.render('index', { users: response.data });
        })
        .catch(err => {
            // Handle error if request fails
            console.error(err);
            res.status(500).send(err);
        });
}

exports.add_use = (req, res) => {
    res.render("add_user")
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
    .then(function(userdata) {
        res.render("update_user", { users: userdata.data });
    })
    .catch(err => {
        res.send(err);
    });
}


