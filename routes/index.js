const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

// Display registration form
router.get('/', (req, res) => {
    res.render('form', {
        title: 'Registration Form'
    });
});

// Process registration form
router.post(
    '/',
    [
        check('name', 'Name is required').notEmpty(),
        check('email', 'Email is required').notEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return res.send('Thanks for registering!');
        }

        res.render('form', {
            title: 'Registration Form',
            errors: errors.array(),
            data: req.body
        });
    }
);

module.exports = router;