const express = require(`express`);
const router = express();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));