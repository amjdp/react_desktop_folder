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
  var sql = "CREATE TABLE user_data (user_id INT AUTO_INCREMENT PRIMARY KEY, First_name VARCHAR(50), Last_name VARCHAR(50), Gender VARCHAR(10), Age INT,District VARCHAR(50), Contact_Number VARCHAR(20))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});