import { createMock } from '@golevelup/ts-jest';
import { CustomersResource } from '../../../src/data/resources/customers-resource';

const makeSut = () => {
	const httpClientStub = createMock<CustomersResource['httpClient']>();

	const sut = new CustomersResource({ httpClient: httpClientStub });

	return { sut, httpClientStub };
};

describe('CustomersResource', () => {
	it('should be defined', () => {
		const { sut } = makeSut();
		expect(sut).toBeDefined();
	});

	it('should have a httpClient property', () => {
		const { sut, httpClientStub } = makeSut();
		expect(sut).toHaveProperty('httpClient');
		expect((sut as any).httpClient).toBe(httpClientStub);
	});

	describe('getById', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			await sut.getById(id);
			expect(httpClientStub.get).toHaveBeenCalledWith({
				url: `/customers/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const response = await sut.getById(id);
			expect(response).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getById(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getAll', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const query = { name: 'any_name' };
			await sut.getAll(query);
			expect(httpClientStub.get).toHaveBeenCalledWith({
				url: '/customers',
				query,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const query = { name: 'any_name' };
			const response = await sut.getAll(query);
			expect(response).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getById(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('create', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const body = { name: 'any_name' } as any;
			await sut.create(body);
			expect(httpClientStub.post).toHaveBeenCalledWith({
				url: '/customers',
				body,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const body = { name: 'any_name' } as any;
			const response = await sut.create(body);
			expect(response).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const body = { name: 'any_name' } as any;
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.create(body);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('update', () => {
		it('should call httpClient.put with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const body = { name: 'any_name' } as any;
			await sut.update(id, body);
			expect(httpClientStub.put).toHaveBeenCalledWith({
				url: `/customers/${id}`,
				body,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const body = { name: 'any_name' } as any;
			const response = await sut.update(id, body);
			expect(response).toEqual(httpClientStub.put.mock.results[0].value);
		});

		it('should throw if httpClient.put throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const body = { name: 'any_name' } as any;
			const error = new Error();
			httpClientStub.put.mockRejectedValueOnce(error);
			const promise = sut.update(id, body);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('remove', () => {
		it('should call httpClient.delete with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			await sut.remove(id);
			expect(httpClientStub.delete).toHaveBeenCalledWith({
				url: `/customers/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const response = await sut.remove(id);
			expect(response).toEqual(httpClientStub.delete.mock.results[0].value);
		});

		it('should throw if httpClient.delete throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const error = new Error();
			httpClientStub.delete.mockRejectedValueOnce(error);
			const promise = sut.remove(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('restore', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			await sut.restore(id);
			expect(httpClientStub.post).toHaveBeenCalledWith({
				url: `/customers/${id}/restore`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const response = await sut.restore(id);
			expect(response).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = 'any_id';
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.restore(id);
			await expect(promise).rejects.toThrow(error);
		});
	});
});
