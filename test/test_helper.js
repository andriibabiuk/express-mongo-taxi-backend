require('dotenv').config();

const mongoose = require('mongoose');
before(done => {
	mongoose.connect(process.env.TEST_DATABASE_URL);
	mongoose.connection
		.once('open', () => {
			done();
		})
		.on('error', err => {
			console.warn('Warning', err);
		});
});
beforeEach(done => {
	const { drivers } = mongoose.connection.collections;
	drivers
		.drop()
		.then(() => drivers.createIndex({ 'geometry.coordinates': '2dsphere' }))
		.then(() => done())
		.catch(() => done());
});
