var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
//   console.log("Connected!"); 
//   var sql = "INSERT INTO customers (name, address) VALUES ('John', 'Highway 71')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
  
//   var sql = "INSERT INTO customers (name, address) VALUES ('Peter', 'Lowstreet 4')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });

//   var sql = "INSERT INTO customers (name, address) VALUES ('Amy', 'Apple st 652')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Hannah', 'Mountain 21')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Michael', 'Valley 345')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Sandy', 'Ocean blvd 2')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Betty', 'Green Grass 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Richard', 'Sky st 331')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Susan', 'One way 98')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Vicky', 'Yellow Garden 2')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Ben', 'Park Lane 38')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('William', 'Central st 954')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Chuck', 'Main Road 989')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var sql = "INSERT INTO customers (name, address) VALUES ('Viola', 'Sideway 1633')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });

  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  


//   var sql = "DELETE FROM customers WHERE address = 'Highway 37'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
});
