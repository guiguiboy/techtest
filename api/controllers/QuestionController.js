/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	post: function (req, res) {

	    let question = {
	        name: req.body.name,
	        question: req.body.question,
	        group: req.body.group
        };

        Question.create(question).exec(function (err, newQuestion){
            if (err) { return res.serverError(err); }

            sails.log('Question id is:', newQuestion.id);
            return res.json(newQuestion);
        });
    }
};
