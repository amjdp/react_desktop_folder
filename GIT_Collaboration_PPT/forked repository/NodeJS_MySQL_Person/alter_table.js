var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CyberSquare"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE users RENAME COLUMN id TO Id INT";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Altered Column");
  });
});