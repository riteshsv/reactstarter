const express = require('express')
var cors = require('cors')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const app = express()

const port = 5000

app.use(express.json());
app.use(cors())

function generateAccessToken(username) {
  const userPayload = {
    id: 1,
    name: username,
    roles: [{ role: 'admin', permissions: ['create', 'edit'] }]
  }
  return jwt.sign(userPayload, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  const token = generateAccessToken(req.body.username);
  res.json({ token: token });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})