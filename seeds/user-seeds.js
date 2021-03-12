// const sequelize = require('../config/connection');
// file used from the module lesson
const { User } = require('../models');

const userdata = [
	{
		username: 'jnyst',
		// email: 'nwestnedge0@cbc.ca',
		password: 'password123'
	},
	{
		username: 'wpears',
		// email: 'rmebes1@sogou.com',
		password: 'password123'
	},
	{
		username: 'npotts',
		// email: 'cstoneman2@last.fm',
		password: 'password123'
	}
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
