//require sequelize connection
var con = require('./connection.js');

//this function creates the requisite number of question marks for the db query
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//define orm methods
var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM burgers";
		con.query(queryString, function(err, res) {
			cb(res);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;
		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';

		con.query(queryString, vals, function(err, res) {
			cb(res);
		})
	},
	updateOne: function(table, colsVals, condition, cb) {
		var queryString = 'UPDATE ' + table;
		queryString += ' SET ';
		queryString += objToSql(colsVals);
		queryString += ' WHERE ';
		queryString += condition;
		con.query(queryString, function(err, res) {
			cb(res)
		});
	}
};

module.exports = orm;