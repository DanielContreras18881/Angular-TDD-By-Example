import {Dollar} from './dollar';
// import {Franc} from './franc';

export class Money {

	constructor(public amount: number) {
		this.amount = amount;
	}

	equals(money: Money): boolean {

		// Compare amount and types
		return this.amount === money.amount &&
			this.constructor.name === money.constructor.name;
	}

	static dollar(amount: number): Dollar {
		return new Dollar(amount);
	}

	// static franc(amount: number): Franc {
	// 	return new Franc(amount);
	// }

	times(multiplier: number): Money {
		return new Money(0);
	}

	currency(): string {

	}

}