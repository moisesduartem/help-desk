import ServiceStatus from '../models/serviceStatus';

class ServiceStatusController {

    async index(req, res) {
        try {
            const serviceStatuses = await ServiceStatus.find();
            return res.json({ serviceStatuses });
        } catch(err) {
            return res.status(500).send(err);
        }

    }
}

export default new ServiceStatusController();