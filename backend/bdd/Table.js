var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'b9tlqacdujuxgov0wpvw-mysql.services.clever-cloud.com',
    user: 'ukncjptfkabqxoxa',
    password: 'BjELQsTxGGQdMgnqTVe6',
    database: "b9tlqacdujuxgov0wpvw"    
});
  
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  
    var sql = "CREATE TABLE if not exists users "
        + "(id INT AUTO_INCREMENT PRIMARY KEY," +
        " login VARCHAR(255), mdp VARCHAR(255))";
  
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});