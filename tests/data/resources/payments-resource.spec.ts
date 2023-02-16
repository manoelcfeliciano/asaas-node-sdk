import { createMock } from '@golevelup/ts-jest';
import { PaymentsResource } from '../../../src/data/resources/payments-resource';
const makeSut = () => {
	const httpClientStub = createMock<PaymentsResource['httpClient']>();

	const sut = new PaymentsResource({ httpClient: httpClientStub });

	return { sut, httpClientStub };
};

describe('PaymentsResource', () => {
	it('should be defined', () => {
		const { sut } = makeSut();
		expect(sut).toBeDefined();
	});

	it('should have a httpClient property', () => {
		const { sut, httpClientStub } = makeSut();
		expect(sut).toHaveProperty('httpClient');
		expect((sut as any).httpClient).toBe(httpClientStub);
	});

	describe('create', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			await sut.create(params);

			expect(httpClientStub.post).toBeCalledWith({
				url: '/payments',
				body: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			const result = await sut.create(params);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});
	});

	describe('createWithCreditCard', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			await sut.createWithCreditCard(params);

			expect(httpClientStub.post).toBeCalledWith({
				url: '/payments',
				body: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			const result = await sut.createWithCreditCard(params);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.createWithCreditCard(params);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('tokenizeCreditCard', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			await sut.tokenizeCreditCard(params);

			expect(httpClientStub.post).toBeCalledWith({
				url: '/creditCard/tokenize',
				body: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			const result = await sut.tokenizeCreditCard(params);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.tokenizeCreditCard(params);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('createWithInstallments', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			await sut.createWithInstallments(params);

			expect(httpClientStub.post).toBeCalledWith({
				url: '/payments',
				body: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			const result = await sut.createWithInstallments(params);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.createWithInstallments(params);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getById', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.getById(id);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/payments/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.getById(id);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getById(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getAll', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			await sut.getAll(params);

			expect(httpClientStub.get).toBeCalledWith({
				url: '/payments',
				query: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;

			const result = await sut.getAll(params);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const params = {
				amount: 100,
			} as any;
			const error = new Error();
			httpClientStub.get.mockRejectedValueOnce(error);
			const promise = sut.getAll(params);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('update', () => {
		it('should call httpClient.put with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const params = {
				amount: 100,
			} as any;

			await sut.update(id, params);

			expect(httpClientStub.put).toBeCalledWith({
				url: `/payments/${id}`,
				body: params,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const params = {
				amount: 100,
			} as any;

			const result = await sut.update(id, params);

			expect(result).toEqual(httpClientStub.put.mock.results[0].value);
		});

		it('should throw if httpClient.put throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const params = {
				amount: 100,
			} as any;
			const error = new Error();
			httpClientStub.put.mockRejectedValueOnce(error);
			const promise = sut.update(id, params);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('remove', () => {
		it('should call httpClient.delete with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.remove(id);

			expect(httpClientStub.delete).toBeCalledWith({
				url: `/payments/${id}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.remove(id);

			expect(result).toEqual(httpClientStub.delete.mock.results[0].value);
		});

		it('should throw if httpClient.delete throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const error = new Error();
			httpClientStub.delete.mockRejectedValueOnce(error);
			const promise = sut.remove(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('restore', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.restore(id);

			expect(httpClientStub.post).toBeCalledWith({
				url: `/payments/${id}/restore`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.restore(id);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.restore(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('refund', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.refund(id);

			expect(httpClientStub.post).toBeCalledWith({
				url: `/payments/${id}/refund`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.refund(id);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const error = new Error();
			httpClientStub.post.mockRejectedValueOnce(error);
			const promise = sut.refund(id);
			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getBoletoBarCode', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.getBoletoBarCode(id);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/payments/${id}/identificationField`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.getBoletoBarCode(id);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const error = new Error();

			httpClientStub.get.mockRejectedValueOnce(error);

			const promise = sut.getBoletoBarCode(id);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getPixQrCode', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.getPixQrCode(id);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/payments/${id}/pixQrCode`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.getPixQrCode(id);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const error = new Error();

			httpClientStub.get.mockRejectedValueOnce(error);

			const promise = sut.getPixQrCode(id);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('confirmCashCollection', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.confirmCashCollection(id);

			expect(httpClientStub.post).toBeCalledWith({
				url: `/payments/${id}/receiveInCash`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.confirmCashCollection(id);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const error = new Error();

			httpClientStub.post.mockRejectedValueOnce(error);

			const promise = sut.confirmCashCollection(id);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('undoReceivedInCash', () => {
		it('should call httpClient.post with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.undoReceivedInCash(id);

			expect(httpClientStub.post).toBeCalledWith({
				url: `/payments/${id}/undoReceivedInCash`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.undoReceivedInCash(id);

			expect(result).toEqual(httpClientStub.post.mock.results[0].value);
		});

		it('should throw if httpClient.post throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const error = new Error();

			httpClientStub.post.mockRejectedValueOnce(error);

			const promise = sut.undoReceivedInCash(id);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe.skip('updateDocument', () => {
		it.todo('should call httpClient.put with correct params');
		it.todo('should return the correct response');
		it.todo('should throw if httpClient.put throws');
	});

	describe('getDocument', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const docId = '321';

			await sut.getDocument(id, docId);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/payments/${id}/documents/${docId}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const docId = '321';

			const result = await sut.getDocument(id, docId);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const docId = '321';

			const error = new Error();

			httpClientStub.get.mockRejectedValueOnce(error);

			const promise = sut.getDocument(id, docId);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('getAllDocuments', () => {
		it('should call httpClient.get with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			await sut.getAllDocuments(id);

			expect(httpClientStub.get).toBeCalledWith({
				url: `/payments/${id}/documents`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const result = await sut.getAllDocuments(id);

			expect(result).toEqual(httpClientStub.get.mock.results[0].value);
		});

		it('should throw if httpClient.get throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';

			const error = new Error();

			httpClientStub.get.mockRejectedValueOnce(error);

			const promise = sut.getAllDocuments(id);

			await expect(promise).rejects.toThrow(error);
		});
	});

	describe('removeDocument', () => {
		it('should call httpClient.delete with correct params', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const docId = '321';

			await sut.removeDocument(id, docId);

			expect(httpClientStub.delete).toBeCalledWith({
				url: `/payments/${id}/documents/${docId}`,
			});
		});

		it('should return the correct response', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const docId = '321';

			const result = await sut.removeDocument(id, docId);

			expect(result).toEqual(httpClientStub.delete.mock.results[0].value);
		});

		it('should throw if httpClient.delete throws', async () => {
			const { sut, httpClientStub } = makeSut();
			const id = '123';
			const docId = '321';

			const error = new Error();

			httpClientStub.delete.mockRejectedValueOnce(error);

			const promise = sut.removeDocument(id, docId);

			await expect(promise).rejects.toThrow(error);
		});
	});
});
