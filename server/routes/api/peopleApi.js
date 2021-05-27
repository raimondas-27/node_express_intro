const express = require("express");
const router = express.Router();

const people = require("../../js/peopleData");

//our all api
router.get("/", (req, res) => {
   res.json(people);
})

//get one people api
router.get("/:id", (req, res) => {
   const paramId = req.params.id

   const found = people.find((element) => element.id === paramId)

   if (!found) {
      res.status(404).json({"errorMsg": "neteisingai nurodytas id"});
   } else {
      res.json(found);
   }
})

module.exports = router;