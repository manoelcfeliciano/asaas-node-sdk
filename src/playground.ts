import './main/config/setup-alias';
import dotenv from 'dotenv';
dotenv.config();

import { AsaasSdk } from './main';

const sdk = new AsaasSdk({
	environment: 'sandbox',
	accessToken: process.env.ASAAS_ACCESS_TOKEN || '',
});

sdk.customers
	.getById('cus_000005024870')
	.then((customer) => {
		console.log(customer);
	})
	.catch((error) => {
		console.log(error);
	});
