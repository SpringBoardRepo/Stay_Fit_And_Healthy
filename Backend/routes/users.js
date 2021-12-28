const db = require("../db");
const bcrypt = require("bcryptjs");
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
} = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");


class User {

    /* authenticate user with username and password
   
    * Returns { username, first_name, last_name, email }
   
    * Throws UnauthorizedError is user not found or wrong password.
   */
    static async authenticate(username, password) {

        //try to find the user first

        const result = await db.query(
            `SELECT username, password,
             first_name AS "firstname",
             last_name AS "lastname",
             email FROM users
             WHERE username=$1`,
            [username]);

        const user = result.rows[0];

        if (user) {
            // compare hashed password to a new hash from password
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
                delete user.password;
                return user;
            }
        }

        throw new UnauthorizedError("Invalid username/password");
    }

    /** Register user with data.
       *
       * Returns { username, firstName, lastName, email}
       *
       * Throws BadRequestError on duplicates.
       **/
    static async register({ username, password, firstName, lastName, email }) {

        const checkDuplicateUser = await db.query(`SELECT username FROM users
                                    WHERE username =$1`, [username]);

        if (checkDuplicateUser.rows[0]) {
            throw new BadRequestError(`Found Duplicate user ,${username}`);
        }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        const result = await db.query(
            `INSERT INTO users
           (username,
            password,
            first_name,
            last_name,
            email)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING username, first_name AS "firstName", last_name AS "lastName", email`,
            [
                username,
                hashedPassword,
                firstName,
                lastName,
                email,
                isAdmin,
            ],
        );

        const user = result.rows[0];

        return user;
    }
}

module.exports = User