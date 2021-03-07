import ServiceCall from '../models/serviceCall';
import User from '../models/user';

class ServiceCallsController {

    async index(req, res) {


        const user = await User.findById(req.userId);
        let serviceCalls = [];

        try {

            if (user.isCostumer) {
                serviceCalls = await ServiceCall.findOne({ author: user._id })
                    .populate({ path: 'category' })
                    .populate({ path: 'author', populate: { path: 'role' } })
                    .populate({ path: 'responsible', populate: { path: 'role' } });
            } else {
                serviceCalls = await ServiceCall.find()
                    .populate({ path: 'category' })
                    .populate({ path: 'author', populate: { path: 'role' } })
                    .populate({ path: 'responsible', populate: { path: 'role' } });
            }

            return res.json({ serviceCalls });
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    async update(req, res) {

        const { id } = req.params;
        const { category, responsible } = req.body;

        try {
            await (await ServiceCall.findOneAndUpdate(id, { category, responsible })).save();
            const serviceCall = await ServiceCall.findById(id)
                .populate({ path: 'category' })
                .populate({ path: 'author', populate: { path: 'role' } })
                .populate({ path: 'responsible', populate: { path: 'role' } });
            return res.json({ serviceCall });

        } catch (err) {
            return res.status(500).send(err);
        }

    }

    async store(req, res) {

        const { title, description, category } = req.body;
        const author = req.userId;

        try {
            let serviceCall = await ServiceCall.create({ title, description, category, author });
            serviceCall = await ServiceCall.findById(serviceCall._id)
                .populate({ path: 'category' })
                .populate({ path: 'author', populate: { path: 'role' } })
                .populate({ path: 'responsible', populate: { path: 'role' } });

            return res.json({ serviceCall });
        } catch (err) {
            return res.status(500).send(err);
        }

    }

}

export default new ServiceCallsController();