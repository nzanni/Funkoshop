const shopControllers ={
    shop: (req, res) => res.send("Route for Shop View"),
    item: (req, res) => res.send("Route for find and retrieve a product from an ID"),
    itemAdd: (req, res) => res.send("Route for add the current item to the shop cart"),
    cart: (req, res) => res.send("Route for cart view"),
    cart: (req, res) => res.send("Route for get to checkout page"),
    
}
module.exports = shopControllers;