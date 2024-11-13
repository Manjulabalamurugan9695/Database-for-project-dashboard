const express = require('express');
const { getAllprojects, createproject, getproject, updateproject, deleteproject } = require('../controller/dashboardController');

const router = express.Router();

router.get("/projects", getAllprojects);

router.get( "/projects/:id", getproject );

router.post( "/project",createproject);

router.patch( "/project/:id",updateproject);

router.delete( "/project/:id", deleteproject);

module.exports = router;
