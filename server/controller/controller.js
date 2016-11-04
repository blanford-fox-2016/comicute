const express = require('express')
const router = express.Router()
const User = require('../models/users')
const Comic = require('../models/comics')

module.exports = {

//    USERS MODEL
//    get user
    getUser: function (req, res) {
        User.find({}, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    //add user
    addUser: function (req, res) {
        const user = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        }

        User.create(user, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    delete user
    deleteUser: function (req, res) {
        User.findOneAndRemove({
            _id: req.params.id
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

//    get user data for edit
    getEditUser: function () {

    },

    //edit user
    editUser: function () {

    },

//    COMICS MODELS

//    get comic
    getComic: function () {

    },

//    add comic
    addComic: function () {

    },

//    delete comic
    deleteComic: function () {

    },

//    get comic data for edit
    getEditComic: function () {

    },

//    edit comic
    editComic: function () {

    }

}
