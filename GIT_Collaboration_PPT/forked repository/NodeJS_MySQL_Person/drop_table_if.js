var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CyberSquare"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE IF EXISTS user_data";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});