const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
require('dotenv').config();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const client = new SecretManagerServiceClient();

let db;

async function accessSecretVersion(secretName) {
  const [version] = await client.accessSecretVersion({ name: secretName });
  return version.payload.data.toString('utf8');
}

async function createDBConnection() {
  let dbConfig;
  if (process.env.NODE_ENV === 'production') {
    const dbHost = await accessSecretVersion('projects/563676754043/secrets/DB_HOST/versions/latest');
    const dbUser = await accessSecretVersion('projects/563676754043/secrets/DB_USER/versions/latest');
    const dbPassword = await accessSecretVersion('projects/563676754043/secrets/DB_PASSWORD/versions/latest');
    const dbName = await accessSecretVersion('projects/563676754043/secrets/DB_DATABASE/versions/latest');
    dbConfig = { host: dbHost, user: dbUser, password: dbPassword, database: dbName };
  } else {
    dbConfig = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    };
  }
  db = mysql.createConnection(dbConfig);
  db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database!');
  });
  return db;
}

async function main() {
  await createDBConnection();
}

main();

app.use(express.static(path.join(__dirname, 'build')));

// add API routes here 
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO account (username, password) VALUES (?, ?)';
    db.query(query, [username, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error registering new user');
      }
      res.status(201).send('User created successfully');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const query = 'SELECT * FROM account WHERE username = ?';
  db.query(query, [username], async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length === 0) {
      return res.status(401).json({ error: 'Username not found' });
    }
    const user = result[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log('Login failed for user:', username);

      return res.status(401).send('Invalid username or password');
    }
    console.log('Login successful for user:', username);
    res.status(200).send('Login successful');
  });
});


// sends requests to react if no routes match (keep at very end)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
