import {Dollar} from './dollar';
import {Franc} from './franc';
import {Money} from './money';

describe('Dollar', ()=> {

	it('can multiply dollars', () => {
		var five:Money = new Dollar(5);
		expect(five.times(2).equals(new Dollar(10)))
			.toBe(true);
		expect(five.times(3).equals(new Dollar(15)))
			.toBe(true);
	})

	it('can check equality', () => {
		expect(new Dollar(5).equals(new Dollar(5)))
			.toBe(true);

		expect(new Dollar(5).equals(new Dollar(6)))
			.toBe(false);

		expect(new Franc(5).equals(new Franc(5)))
			.toBe(true);

		expect(new Franc(5).equals(new Franc(6)))
			.toBe(false);

		expect(new Dollar(5).equals(new Franc(5)))
			.toBe(false);

	})


	it('can multiply francs', () => {
		var five: Franc = new Franc(5);
		expect(five.times(2).equals(new Franc(10)))
			.toBe(true);
		expect(five.times(3).equals(new Franc(15)))
			.toBe(true);
	})

	it('can return its currency', () => {
		expect(new Dollar(1).getCurrency()).toBe("USD");
		expect(new Franc(1).getCurrency()).toBe("CHF");
	})

});