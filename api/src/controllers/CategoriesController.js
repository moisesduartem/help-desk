import Category from '../models/category';

class CategoriesController {

    async index(req, res) {
        try {
            const categories = await Category.find();
            return res.json({ categories });
        } catch(err) {
            return res.status(500).send(err);
        }

    }
}

export default new CategoriesController();