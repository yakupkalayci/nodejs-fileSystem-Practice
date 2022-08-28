const fs = require("fs");

// fs.writeFile("employees.json", '{"name": "Employee 1", "salary": 2000}', "utf-8", (err) => {
//     if(err) console.log(err);
//     console.log("File is created!");
// });

fs.readFile("employees.json", "utf8", (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log("File is read");
});

fs.appendFile("employees.json", '{"name": "Employee 2", "salary": 3000}', "utf8", (err) => {
    if(err) console.log(err);
    console.log("File is updated");
});

fs.unlink("employees.json", (err) => {
    if(err) console.log(err);
    console.log("File is deleted");
});