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
  const image = req.body.image;
  const sqlInsert = "INSERT INTO Animal(Name,Gender,weight,DOB,class_id,vet_id,imageUrl) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [Name, Gender, weight, DOB,class_id,vet_id,image],
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


app.post("/sql_addEnclosure" , (req,res) => {
    const size = req.body.size;
    const location = req.body.location;
    const noOfAnimals = req.body.noOfAnimals;

    const sqlInsert = "INSERT INTO Enclosure(size,no_of_animals,location) VALUES (?,?,?)";
    db.query(
        sqlInsert,
        [size,noOfAnimals,location],
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

app.post("/sql_addVet" , (req,res) => {
    const vet = req.body.vet;
    const qualification = req.body.qualification;
    const salary = req.body.salary;

    const sqlInsert = "INSERT INTO vet(Name,qualification,salary) VALUES (?,?,?)";
    db.query(
        sqlInsert,
        [vet,qualification,salary],
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

app.post("/sql_addEmployee" ,(req,res) => {
    const name = req.body.name;
    const jobTitle = req.body.jobTitle;
    const sid = req.body.sid;

    const sqlInsert = "INSERT INTO Employee(Name,job_title,SID) VALUES (?,?,?)";
    db.query(
        sqlInsert,
        [name,jobTitle,sid],
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


app.post("/sql_addfood" , (req,res) => {
    const food = req.body.foodName;
    const foodStock = req.body.foodStock;


    const sqlInsert = "INSERT INTO Animal_food(name,stock) VALUES (?,?)";
    db.query(
        sqlInsert,
        [food,foodStock],
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

    
app.post("/sql_deleteAnimal", (req, res) => { 
    const id = req.body.id;
    const sqlDelete = "DELETE FROM Animal WHERE id = ?";
    db.query
    (sqlDelete, id, (err, result) => {
        if (err) console.log(err);
        else res.send("Values Deleted");
    });
});

app.post("/sql_deleteFood", (req, res) => { 
  const id = req.body.food_id;
  const sqlDelete = "DELETE FROM Animal_food WHERE food_id = ?";
  db.query
  (sqlDelete, id, (err, result) => {
      if (err) console.log(err);
      else{res.send("Values Deleted")};
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

app.get("/sql_getAnimals", (req, res) => {
  console.log(logged_phone_number);

  const sqlSelect =
    "SELECT Animal.ID, Animal.Name, Animal.Gender, Animal.Weight, Animal.DOB, classification.Class_Name, vet.Name as vet_Name, enclosure.location FROM Animal INNER JOIN VET ON Animal.vet_id=vet.vet_id INNER JOIN classification on Animal.class_id=classification.Class_ID INNER JOIN eclosed_by on Animal.ID=eclosed_by.Animal_ID INNER JOIN enclosure on enclosure.Enclosure_id=eclosed_by.Encloser_id";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send({ loggedIn: true, result: result });
  });
});

app.get("/sql_getEnclosure", (req, res) => {
  const sqlSelect = "SELECT * FROM enclosure";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({ loggedIn: true, result: result });
    }
  });
});

app.get("/sql_getVet", (req, res) => {
  const sqlSelect = "SELECT * FROM vet";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({ loggedIn: true, result: result });
    }
  });
});

app.get("/sql_getAnimalFood", (req, res) => {
  const sqlSelect = "SELECT * FROM animal_food";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({ loggedIn: true, result: result });
    }
  });
});

app.get("/sql_getClassifications", (req, res) => {
  const sqlSelect = "SELECT * FROM classification";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({ loggedIn: true, result: result });
    }
  });
});

app.get("/sql_getEmployee", (req, res) => {
  const sqlSelect = "SELECT * FROM Employee";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({ loggedIn: true, result: result });
    }
  });
});

app.get("/sql_animals", (req, res) => {
  const type = req.query.type;
  console.log(type);
  if (type === "all") {
    sqlSelect = "select Name, imageUrl from animal";
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send({ loggedIn: true, result: result });
      }
    });
  } else {
    sqlSelect = "select Name, imageUrl from animal where class_id=" + type;
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send({ loggedIn: true, result: result });
      }
    });
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
