const authControllers ={
    login: (req, res) => res.send("Route for login View"),
    login: (req, res) => res.send("Route for login post View"),
    register: (req, res) => res.send("Route for register View"),
    register: (req, res) => res.send("Route for register post View"),
    logout: (req, res) => res.send("Route for logout View"),
}
module.exports = authControllers;