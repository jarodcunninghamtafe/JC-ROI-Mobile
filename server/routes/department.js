const express = require("express");
const Department = require("../models/department");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) return res.status(404).send("Department not found.");
    res.json(department);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newDepartment = await Department.create(req.body);
    res.status(201).json(newDepartment);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating department");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) return res.status(404).send("Department not found.");

    await department.update(req.body);
    res.json(department);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error updating department");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) return res.status(404).send("Department not found.");

    await department.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
