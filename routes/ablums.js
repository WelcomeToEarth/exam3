var express = require('express');
var router = express.Router();
var ablumDao = require('../dao/ablums')
    /* GET users listing. */
router.get('/', function(req, res) {
    console.log('get')
    ablumDao.findAllAblums(function(ablums) {
        res.json(ablums)
    })
});

router.post('/', function(req, res) {
    let ablum = req.body
    ablumDao.addAblums(ablum, function(nb) {
        res.json(nb)
    })
})
router.delete('/:id', function(req, res) {
    let id = req.params.id;
    ablumDao.deleteAblum(id, function(obj) {
        res.json(obj)
    })
})

module.exports = router;