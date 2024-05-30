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


exports.search_user = (req, res) => {
    const searchQuery = req.query.search;

    if (!searchQuery) {
        res.render('index', { users: [], message: "Search query is empty" });
        return;
    }

    axios.get('http://localhost:3000/api/users/search', { params: { name: searchQuery  } })
        .then(function (response) {
            if (response.data.length === 0) {
                res.render('index', { users: [], message: "User not found" });
            } else {
   
                    res.render('index', { users: response.data, message: null });

            }
        })
        .catch(err => {
            console.error(err);
            if (err.response && err.response.status === 404) {
                res.render('index', { users: [], message: "User not found" });
            } else {
                res.status(500).render('index', { users: [], message: "An error occurred" });
            }
        });
};




