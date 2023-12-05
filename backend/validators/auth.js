const { check } = require('express-validator')
const validateResults = require('../utils/handlerValidator')

const validatorRegister = [
  check('username').exists().notEmpty().isLength({ min: 6, max: 50 }),
  check('password')
    .exists()
    .notEmpty()
    .isAlphanumeric()
    .isLength({ min: 8, max: 16 }),
  check('email').exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password')
    .exists()
    .notEmpty()
    .isAlphanumeric()
    .isLength({ min: 8, max: 16 }),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorRegister, validatorLogin }
