var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/todo');
router.get('/', function(req, res) {
	var collection = db.get('todolist');
	collection.find({}, function(err, todolist){
		if (err) throw err;
	  	res.json(todolist);
	});
});

// router.get('/:id', function(req, res) {
// 	var collection = db.get('videos');
// 	collection.findOne({ _id: req.params.id }, function(err, video){
// 		if (err) throw err;
// 	  	res.json(video);
// 	});
// });
module.exports = router;