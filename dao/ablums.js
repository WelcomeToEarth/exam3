//dao/BookDao.js v1
const mogoose = require('mongoose')

let ablumsModel = mogoose.model("test")

function addAblums(ablum, callback) {
    ablumsModel.create(ablum, function(err, newAblumDoc) {
        if (!err) callback(newAblumDoc.toObject())
    })
}

function findAllAblums(callback) {
    ablumsModel.find({}).exec(function(err, ablums) {
        console.log(ablums, 'ablums')
        if (!err) callback(ablums)
    })
}

function deleteAblum(id, callback) {
    ablumsModel.findByIdAndRemove(id, function(err) {
        if (!err) callback({})
    })
}

module.exports = { addAblums, deleteAblum, findAllAblums }