const projects = require('../model/dashboardModel');

const createproject = (req,res) => {
    res.send("Create a project");
};

const getAllprojects = async (req,res) => {
    const projectDetails = await projects.find({})
    res.status(200).json(projectDetails);
};

const getproject = (req,res) => {
    res.send("Get a particular project");
};

const updateproject = (req,res) => {
    res.send("Update a project");
};

const deleteproject = (req,res) => {
    res.send("Delete a project");
};


module.exports = { createproject, getAllprojects, getproject, updateproject, deleteproject};
