const { body } = require("express-validator");

const addTeamMemberValidator = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("Le nom doit contenir au moins 3 caracatères"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("email ne doit pas être vide")
    .isEmail()
    .withMessage("Le format de email est incorrect"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Le mot de passe doit contenir au moins 8 caracatères"),
  body("salaire")
    .notEmpty()
    .withMessage("salaire must be not empty")
    .isNumeric()
    .withMessage("salaire format is invalid"),
  body("day_payment")
    .notEmpty()
    .withMessage("day_payment must be not empty")
    .isNumeric()
    .withMessage("day_payment format is invalid"),
  body("commission")
    .notEmpty()
    .withMessage("commission must be not empty")
    .isNumeric()
    .withMessage("commission format is invalid"),
  body("upsell")
    .optional()
    .notEmpty()
    .withMessage("upsell must be not empty")
    .isNumeric()
    .withMessage("upsell format is invalid"),
  body("downsell")
    .optional()
    .notEmpty()
    .withMessage("downsell must be not empty")
    .isNumeric()
    .withMessage("downsell format is invalid"),
  body("crosssell")
    .optional()
    .notEmpty()
    .withMessage("crosssell must be not empty")
    .isNumeric()
    .withMessage("crosssell format is invalid"),
  body("max_order")
    .notEmpty()
    .withMessage("max_order must be not empty")
    .isNumeric()
    .withMessage("max_order format is invalid"),
  body("can_delete_order")
    .not()
    .isEmpty()
    .withMessage("can_delete_order ne doit pas être vide")
    .isBoolean()
    .withMessage("Le format est invalide"),
  body("can_edit_order")
    .not()
    .isEmpty()
    .withMessage("can_edit_order ne doit pas être vide")
    .isBoolean()
    .withMessage("Le format est invalide"),
];

module.exports = {
  addTeamMemberValidator,
};
