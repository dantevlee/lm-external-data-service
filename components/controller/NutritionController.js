require("dotenv").config({ path: "./components/config/.env" });
const express = require("express");
const router = express.Router();
const axios = require("axios");
router.use(express.json());

router.get("/food/search", async (req, res) => {
  const { search } = req.query;

  try {
    const response = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant/?query=${search}`,
      {
        headers: {
          "x-app-id": process.env.APP_ID,
          "x-app-key": process.env.APP_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(`Error occurred searching for nutrition information `, error);
  }
});

router.post("/nutrients/food", async (req, res) => {

  const {query} = req.body

  try {
    const response = await axios.post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      {
        query: query,
      },
      {
        headers: {
          "x-app-id": process.env.APP_ID,
          "x-app-key": process.env.APP_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(`Error occurred fetching nutrient information `, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
