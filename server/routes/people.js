const express = require("express");
const Person = require("../models/person");
const Department = require("../models/department");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const people = await Person.findAll({ include: Department });
    res.json(people);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id, {
      include: Department,
    });
    if (!person) return res.status(404).send("Person not found.");
    res.json(person);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating person");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).send("Person not found.");

    await person.update(req.body);
    res.json(person);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error updating person");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).send("Person not found.");

    await person.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
