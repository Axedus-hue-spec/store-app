import { pool } from "../db.js";

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const [data] = await pool.query("SELECT * FROM products;");
            return res.json({data})
        } catch(e) {
            console.log(e);
            return res.status(402);
        }
    }

    static async createProduct(req, res) {
        const {name, price, image} = req.body
        try {
            await pool.query(`
                INSERT INTO products(name, price, image) 
                VALUES('${name}', '${price}', '${image}');
                `);
            return res.json({message: 'Продукт успешно добавлен'})
        } catch(e) {
            console.log(e);
            return res.status(401).json({message: "Ошибка"})
        }
    }

    static async deleteProduct(req, res) {
        const {id} = req.params;
        
        try {
            await pool.query(`DELETE FROM products WHERE id_product=${id}`);
            return res.json({message: "Продукт удален"});
        } catch(e) {
            console.log(e)
            return res.status(401).json({message: "Ошибка"})    
        }
    }
}

export default ProductController;