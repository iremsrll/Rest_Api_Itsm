const express = require('express');
require('dotenv').config();

const db = require('./src/api/models/Index');

const app = express();

const port = 3000;

app.listen(port, async () => {
    try {
      await db.sequelize.authenticate();
      await db.sequelize.sync({ force: true });

    } catch (error) {
      console.error(error);
    }
  });