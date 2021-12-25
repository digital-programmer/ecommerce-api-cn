const Product = require("../../models/product");

module.exports.create = function (req, res) {
    Product.create(req.body, function (err, product) {
        if (err) {
            console.log(err);
            return res.status(404).json({
                message: "Product could not be created",
            })
        }


        return res.status(200).json({
            "data": {
                "product": {
                    "name": product.name,
                    "quantity": product.quantity
                }
            }
        })
    })
}

module.exports.get = async function (req, res) {
    try {
        products = await Product.find({}, '-_id  name quantity id').exec();
        if (products) {
            return res.status(200).json({
                data: {
                    products
                }
            })
        }
        return res.status(401).json({
            message: 'Products not found'
        })

    } catch (err) {
        console.log(err);
        return res.json({
            message: err.message
        })
    }
}

module.exports.delete = async function (req, res) {
    const productID = req.params.id;
    try {
        let product = await Product.findOne({ id: productID });
        if (product) {
            product.remove();
            return res.status(200).json({
                data: {
                    message: 'Product deleted successfully'
                }

            });
        } else {
            return res.status(401).json({
                message: "Product not found"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
        })
    }
}

module.exports.updateQuantity = async function (req, res) {
    const productID = req.params.id;
    const update_amount = req.query.number;
    if (update_amount !== undefined) {
        try {
            let product = await Product.findOne({ id: productID });
            if (product) {
                if (product.quantity >= update_amount) {
                    let new_amount = Number(update_amount) + product.quantity;
                    await Product.findOneAndUpdate({ id: productID }, { $set: { quantity: new_amount } });
                    return res.json({
                        message: "Updated successfully",
                        data: {
                            product: {
                                id: productID,
                                name: product.name,
                                quantity: new_amount
                            }
                        }
                    })
                }
                return res.status(401).json({
                    data: {
                        message: "Product Quantity insufficient"
                    }
                });
            }
            return res.status(401).json({
                data: {
                    message: "Product not found"
                }
            });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({
                data: {
                    message: "Internal Server Error"
                }
            });
        }
    }

    return res.json({
        data: {
            message: "Please provide a valid update amount"
        }
    })
}