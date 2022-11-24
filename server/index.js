const db = require("./config/dbConn.js");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

var logged_phone_number = "";

app.post("/sql_donate", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const amount = req.body.amount;
  const city = req.body.city;
  const phone = req.body.phone.substring(3);
  const sqlInsert =
    "INSERT INTO donations (name, email,city, phone,amount , date) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [name, email, city, phone, amount, new Date()],
    (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/sql_book_ticket", (req, res) => {
  const phone = req.body.Phone.substring(3);
  const name = req.body.Name;
  const city = req.body.City;
  const email = req.body.Email;
  const date = req.body.Date;
  const adult = req.body.Adult;
  const child = req.body.Child;
  const sqlInsert =
    "INSERT INTO Tickets(Phone, Name, City, Email, Date, adult, child) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [phone, name, city, email, date, adult, child],
    (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/sql_addAnimal", (req, res) => {
  const Name = req.body.animal;
  const Gender = req.body.gender;
  const DOB = req.body.dob;
  const weight = req.body.weight;
  const class_id = req.body.class_id;
  const vet_id = req.body.vet;
  const sqlInsert = "INSERT INTO Animal(Name,Gender,weight,DOB,AGE,class_id,vet_id) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [Name, Gender, weight, DOB, AGE, class_id,vet_id],
    (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/sql_addClassification", (req, res) => {
   const Class_name = req.body.className;
   const no_of_animals = req.body.noOfAnimals;

    const sqlInsert = "INSERT INTO Classification(Class_name,no_of_animals) VALUES (?,?)";
    db.query(
        sqlInsert,
        [Class_name, no_of_animals],
        (err, result) => {
            console.log(result);
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/sql_login", (req, res) => {
  const number = req.body.number;
  const sqlSelect = "SELECT * FROM users WHERE phone = ?";
  db.query(sqlSelect, [number], (err, result) => {
    if (result.length === 0) {
      const sqlInsert = "INSERT INTO users (phone) VALUES (?)";
      db.query(sqlInsert, [number], (err, result) => {
        console.log(result);
        if (err) {
          console.log(err);
        } else {
          logged_phone_number = number;
          res.send("Values Inserted");
        }
      });
    } else {
      logged_phone_number = number;
      res.send("User already exists. so, Hey! welcome back!!!!");
    }
  });
});

app.get("/sql_login", (req, res) => {
  if (logged_phone_number != "") {
    const sqlSelect = "SELECT role FROM users WHERE phone = ?";
    db.query(sqlSelect, [logged_phone_number], (err, result) => {
      res.send({ loggedIn: true, user: result });
    });
  } else {
    res.send({ loggedIn: false, user: null });
  }
});

// app.get("/sql_donate" , (req, res) => {
//     const sqlSelect = "SELECT * FROM donations where id = (?)";
//     db.query(sqlSelect,[1], (err, result) => {
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result);
//         }

// })
// });

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
