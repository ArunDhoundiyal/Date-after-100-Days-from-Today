const addDays = require("date-fns/addDays");
const import_express = require("express");
const express_instance = import_express();
express_instance.get("/", (request, response) => {
  const todays_date = new Date();
  const new_date = addDays(new Date(todays_date), 100);
  response.send(
    `${new_date.getDate()}/${new_date.getMonth() + 1}/${new_date.getFullYear()}`
  );

  response.send();
});
module.exports = express_instance;
