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
  var sql = "INSERT INTO user_data (First_name, Last_name, Gender, Age, District, Contact_Number) VALUES ?";

  var values = [
    ['John', 'Michael','Male',30,'Thiruvananthapuram','9875642365'],
    ['Frans', 'Kafka','Male',35,'Kollam','9875642365'],
    ['Gean', 'Paul','Male',34,'Thrissur','9875642365'],
    ['Albert', 'Camus','Male',31,'Kozhikode','9875642365'],
    ['Susan','Chuck','Female',28,'Kannur','9875642365'],
    ['Anna','Akhmathova','Female',26,'Alappuzha','9875642365']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});