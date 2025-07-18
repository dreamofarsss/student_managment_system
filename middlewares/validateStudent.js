const {validationResult, body} = require('express-validator')

const validateStudent = [
    body('first_name').isEmpty().withMessage('First name is required'),
    body('email').isEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('password').isEmpty().withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

module.exports = validateStudent