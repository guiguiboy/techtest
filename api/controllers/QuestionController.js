/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function (req, res) {
    	return res.send('Processing question ' + req.param('id'));
    }
};
