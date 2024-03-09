const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port:'3306',
    database: 'test'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM chefs';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});
app.get('/api/menu', (req, res) => {
    const query = 'SELECT * FROM cuisines';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});
app.get('/api/seat', (req, res) => {
    const query = 'SELECT * FROM seat_details;';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.get('/api/reserve', (req, res) => {
    const query = 'SELECT * FROM reservation;';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/insert', (req, res) => {
    const sql=" insert into chefs values(?)";
    const values =[
        req.body.chef_id,
        req.body.name,
        req.body.dob,
        req.body.gender,
        req.body.rating,
        req.body.salary
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("INSERTION FAILED");
        return res.json(data);
    })
});
app.post('/api/reserve', (req, res) => {
    const sql=" insert into reservation (name,email,ph_no,seat_no,time) values(?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.phno,
        req.body.seat,
        req.body.time
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("INSERTION FAILED");
        return res.json(data);

    })
    const seatt = req.body.seat;
    const sql1="update seat_details set booked='YES' where seat_no=?"
    connection.query(sql1,[seatt],(err,data)=>{
        if(err) return res.json("INSERTION FAILED");
        return res.json(data);
    })
});

app.post('/api/status', (req, res) => {
    const sql=" update seat_details set booked='NO' where seat_no=?";
    const values =[
        req.body.edit
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("Edited FAILED");
        return res.json(data);
    })
});
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
app.post('/api/delete', (req, res) => {
    const sql=" delete from chefs where chef_id=?";
    const values =[
        req.body.id
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("deletion FAILED");
        return res.json(data);
    })
});

app.listen(8081, () => {
    console.log(`Server listening on port`);
});
