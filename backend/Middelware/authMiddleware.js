const jwt = require('jsonwebtoken')

module.exports = async(req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, "dhruvin", (err, decode) => {
            if (err) {
                return res.status(401).send({
                    message: "auth failed"
                })
            } else {
                req.body.user_id = decode.user_id;
                next();
            }
        })
    } catch (error) {
        return res.status(401).send({
            message: "auth failed",
            error,
        })
    }
}