import { createMock } from '@golevelup/ts-jest';
import { BaseResourceConstructor } from '../../../src/data/protocols/base-resource';
import { BaseResource } from '../../../src/data/resources/base-resource';

const makeSut = () => {
	const httpClientStub = createMock<BaseResourceConstructor['httpClient']>();

	const sut = new BaseResource({ httpClient: httpClientStub });

	return { sut, httpClientStub };
};

describe('BaseResource', () => {
	it('should be defined', () => {
		const { sut } = makeSut();
		expect(sut).toBeDefined();
	});

	it('should have a httpClient property', () => {
		const { sut, httpClientStub } = makeSut();
		expect(sut).toHaveProperty('httpClient');
		expect((sut as any).httpClient).toBe(httpClientStub);
	});
});
