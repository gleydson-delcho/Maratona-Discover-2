const express = require('express');
const routes = express.Router();
const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');

routes
  .get('/', DashboardController.index)
  .get('/job/:id', JobController.show)
  .post('/job/:id', JobController.update)
  .post('/job/delete/:id', JobController.delete)
  .get('/job', JobController.create)
  .post('/job', JobController.save)
  .get('/profile', ProfileController.index)
  .post('/profile', ProfileController.update)

module.exports = routes;