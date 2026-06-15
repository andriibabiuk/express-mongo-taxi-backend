const Driver = require('../models/driver');
const MAX_DISTANCE = require('../constants').MAX_DISTANCE;
module.exports = {
	greeting(req, res) {
		res.send({ hi: 'there' });
	},
	index(req, res, next) {
		const { lng, lat } = req.query;
		Driver.aggregate([
			{
				$geoNear: {
					near: {
						type: 'Point',
						coordinates: [parseFloat(lng), parseFloat(lat)],
					},
					spherical: true,
					maxDistance: MAX_DISTANCE,
					distanceField: 'dist',
				},
			},
		])
			.then(drivers => {
				const wrappedDrivers = drivers.map(driver => ({ obj: driver }));
				res.send(wrappedDrivers);
			})
			.catch(next);
	},
	create(req, res, next) {
		const driverProps = req.body;
		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(next);
	},
	edit(req, res, next) {
		const driverId = req.params.id;
		const driverProps = req.body;
		Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
			.then(() => Driver.findById({ _id: driverId }))
			.then(driver => res.send(driver))
			.catch(next);
	},
	delete(req, res, next) {
		const driverId = req.params.id;
		Driver.findByIdAndDelete({ _id: driverId })
			.then(driver => res.status(204).send(driver))
			.catch(next);
	},
};
