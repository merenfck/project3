const express = require('express');
const router = express();






router.post('/', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const owner = req.user._id;
  const tasks = [];

  Project.create({
    title,
    description,
    owner,
    tasks,
  })
})