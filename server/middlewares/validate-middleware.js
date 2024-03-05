

//this middleware is used for check the user enters data in form inputs is correct or not

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        res.json({ msg: err.errors[0].message })
    }
}

module.exports = validate


