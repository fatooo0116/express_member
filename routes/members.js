var express = require('express');
var router = express.Router();




router.get('/',function(req,res,next){
  console.log(req.body.test);
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});


router.post('/',function(req,res,next){
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});



const MemberModifyMethod = require('../controllers/modify_controller');
memberModifyMethod = new MemberModifyMethod();
router.post('/register',memberModifyMethod.postRegister);



/*
const MemberModifyMethod = require('../controllers/modify_controller');
memberModifyMethod = new MemberModifyMethod();
router.post('/register',memberModifyMethod);
*/


module.exports = router;
