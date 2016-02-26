import {Dollar} from './dollar';


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

	times(multiplier: number): Money {
		return new Money(0);
	}

}