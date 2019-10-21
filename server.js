const express = require('express');
const app = express();
const connectBD = require('./config/db');

// Connect DateBase
connectBD();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: "Wellcome to Contact-Keeper's API" })
);

// Define routs
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
