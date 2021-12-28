const express = require("express");
const router = new express.Router();
const { BadRequestError } = require("../expressError");
const jwt = require("jsonwebtoken");
const jsonschema = require("jsonschema");
const userAuthSchema = require("../schemas/userAuth.json");
const userRegisterSchema = require("../schemas/userRegisterSchema.json");
const User = require("./users");
const { SECRET_KEY } = require("../config");

router.post("/token", async (req, res, next) => {

    try {
        const validator = jsonschema.validate(req.body, userAuthSchema);

        if (!validator.valid) {
            const err = validator.errors.map(e => e.stack);
            throw new BadRequestError(err);
        }
        const { username, password } = req.body;
        const user = await User.authenticate(username, password);
        const token = jwt.sign(user.username, SECRET_KEY);
        return res.json({ token });

    } catch (err) {
        return next(err);
    }
})

router.post("/register", async (res, req, next) => {
    try {

        const validator = jsonschema.validate(req.body, userRegisterSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const newUser = await User.register({ ...req.body });
        const token = jwt.sign(newUser, SECRET_KEY);;
        return res.status(201).json({ token });
    }
    catch (err) {
        return next(err);
    }
})

module.exports = router;