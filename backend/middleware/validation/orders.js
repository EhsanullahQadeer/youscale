const { body } = require("express-validator");

const addOrderValidator = [
  body("nom")
    .isLength({ min: 3 })
    .withMessage("La note doit contenir au moins 3 caracatères"),
  body("telephone")
    .isLength({ min: 8 })
    .withMessage("Le telephone doit contenir au moins 8 caracatères"),
  body("id_city")
    .notEmpty()
    .withMessage("id_city must be not empty")
    .isNumeric()
    .withMessage("id_city format is invalid"),
  body("prix")
    .notEmpty()
    .withMessage("prix must be not empty")
    .isNumeric()
    .withMessage("prix format is invalid"),
  body("status")
    .isLength({ min: 3 })
    .withMessage("Le status doit contenir au moins 3 caracatères"),
  body("adresse").optional(),
  body("message").optional(),
  body("changer")
    .optional()
    .isLength({ min: 3 })
    .withMessage("changer doit contenir au moins 3 caracatères"),
  body("ouvrir")
    .optional()
    .isLength({ min: 3 })
    .withMessage("ouvrir doit contenir au moins 3 caracatères"),
  body("source")
    .isLength({ min: 3 })
    .withMessage("La source doit contenir au moins 3 caracatères"),
  body("updownsell")
    .isLength({ min: 3 })
    .withMessage("updownsell doit contenir au moins 3 caracatères"),
  body("id_product_array")
    .isArray()
    .withMessage("id_product_array must be array"),
];

module.exports = {
  addOrderValidator,
};
