"use strict";

var express = require('express');
var router = express.Router();
var _ = require('lodash');

// ==========================================
// Dashboard
// ==========================================

/**
 * Dashboard
 */
router.get('/', (req, res, next) => {
	db.Light.getJoin().run()
  .then(lights => {
  	res.render('lights/lights', { lights });
  })
  .catch(error => {
    console.log(`An error occurred: ${error.message}`);
  });
});

module.exports = router;