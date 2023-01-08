export namespace Discount {
	export type Type = 'percentage' | 'fixed';
	export type Main = {
		value: number;
		dueDateLimitDays: number;
		type?: Discount.Type;
	};
}
