import {Money} from './money';
import {Bank} from './bank';
import {Expression} from './expression';

describe('Dollar', ()=> {

	it('can multiply dollars', () => {
		var five: Money = Money.dollar(5);
		expect(five.times(2).equals(Money.dollar(10)))
			.toBe(true);
		expect(five.times(3).equals(Money.dollar(15)))
			.toBe(true);
	})

	it('can check equality', () => {
		expect(Money.dollar(5).equals(Money.dollar(5)))
			.toBe(true);

		expect(Money.dollar(5).equals(Money.dollar(6)))
			.toBe(false);

	})

	it('can return its currency', () => {
		expect(Money.dollar(1).getCurrency()).toBe("USD");
		expect(Money.franc(1).getCurrency()).toBe("CHF");
	})

	it('can do simple addition', () => {
		expect(Money.dollar(5).plus(Money.dollar(5)).equals(Money.dollar(10)))
			.toBe(true);

		var five: Money = new Money.dollar(5);
		var sum: Expression = five.plus(five);

		var bank: Bank = new Bank();
		var reduced: Money = bank.reduce(sum, "USD"); 
		expect(Money.dollar(10).equals(reduced)).toBe(true);
	})

});