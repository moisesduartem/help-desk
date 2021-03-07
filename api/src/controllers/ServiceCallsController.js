import ServiceCall from '../models/serviceCall';

class ServiceCallsController {

    async index(req, res) {
        try {
            const serviceCalls = await ServiceCall.find().populate(['category', 'responsible']);
            return res.json({ serviceCalls });
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    async store(req, res) {
        const { title, description, category, responsible } = req.body;
        try {
            let serviceCall = await ServiceCall.create({ title, description, category, responsible });
            serviceCall = await ServiceCall.findById(serviceCall._id).populate(['category', 'responsible']);
            return res.json({ serviceCall });
        } catch (err) {
            return res.status(500).send(err);
        }

    }

}

export default new ServiceCallsController();