const router = require("express").Router();
const { default: axios } = require("axios");
const apicache = require("apicache");
const env = require("../utils/env");

const cache = apicache.middleware;

// Generic approach
router.get("/", cache("2 minutes"), async (request, response, next) => {
  try {
    const query = request.query || {};

    const params = {
      appid: env.apiKey,
      ...query,
    };
    const { data } = await axios.get(env.baseURL, { params });

    return response.status(200).json({
      message: "Current weather data fetched!",
      details: { ...data },
    });
  } catch (error) {
    const {
      response: { data },
    } = error;
    const statusCode = Number(data.cod) || 400;
    return response
      .status(statusCode)
      .json({ message: "Bad Request", details: { ...data } });
  }
});

module.exports = router;
