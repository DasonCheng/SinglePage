/**
 * Created by Orange on 2016/2/20.
 */
var express = require('express');
var router = express.Router();


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', function(req, res) {
    res.render('index',{
        title:'首页'
    });
});
router.get('/case', function(req, res) {
    res.render('case',{
        title:'案例'
    });
});
router.get('/service', function(req, res) {
    res.render('service',{
        title:'服务'
    });
});
router.get('/about', function(req, res) {
    res.render('about',{
        title:'关于'
    });
});
router.get('/fullpage', function(req, res) {
    res.render('fullpage',{
        title:'活动'
    });
});
router.post('/fullpage', function(req, res) {
    res.render('fullpage',{
        title:req.body.name
    });
});

module.exports = router;