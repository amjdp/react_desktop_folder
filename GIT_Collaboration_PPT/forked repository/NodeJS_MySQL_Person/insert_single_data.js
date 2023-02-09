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
  var sql = "INSERT INTO user_data(First_name, Last_name, Gender, Age, District, Contact_Number) VALUES ('Anna','Akhmathova','Female',26,'Alappuzha','9875642365')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
