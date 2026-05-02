// Module Imports
const express = require('express');
const Product = require('./model/products.model');

// App Initialization & Middleware
const app = express();
app.use(express.json());

// Check Route
app.get('/', (req, res) => {
    try {
        return res.send('ok');
    } catch (error) {
        console.log('Error in Home:', error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
})

// Create Product
app.post('/product/create', async (req, res) => {

    try {
        let { name, price, description, category, stock } = req.body;

        if (!name || !price || !description || !category || !stock) {
            return res.status(400).json({
                message: "All field is required"
            });
        }
        let newProduct = await Product.create({
            name,
            price,
            description,
            category,
            stock
        });

        return res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        })
    } catch (error) {
        console.log('Error in ProductCreate:', error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }

});

// Get All Products
app.get('/product/all', async (req, res) => {
    try {
        let products = await Product.find();
        return res.status(200).json({
            message: "Products fetched successfully",
            products
        })
    } catch (error) {
        console.log('Error in ProductGetAll:', error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// Get Single Product by ID
app.get('/product/single/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        return res.status(200).json({
            message: "Product fetched successfully",
            product
        })
    } catch (error) {
        console.log('Error in ProductGetSingle:', error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// Update Product by ID
app.put('/product/update/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let { name, price, description, category, stock } = req.body;

        if (!name || !price || !description || !category || !stock) {
            return res.status(400).json({
                message: "All field is required"
            });
        }

        let updateProduct = await Product.findByIdAndUpdate(id, {
            name,
            price,
            description,
            category,
            stock
        }, { new: true });

        return res.status(200).json({
            message: "Product updated successfully",
            updateProduct
        });

    } catch (error) {
        console.log('Error in ProductUpdate:', error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// Delete Product by ID
app.delete('/product/delete/:id', async (req, res) => {
    try {
        let { id } = req.params;

        await Product.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Product deleted"
        })
    } catch (error) {
        console.log('Error in ProductDelete:', error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

module.exports = app;