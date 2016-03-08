// import {Franc} from './franc';
// import {Dollar} from './dollar';


export class Money {

	public currency: string;

	constructor(public amount: number) {
		this.amount = amount;
	}

	equals(money: Money): boolean {

		// Compare amount and types
		return this.amount === money.amount &&
			this.constructor.name === money.constructor.name;
	}

	// static dollar(amount: number): Dollar {
	// 	return new Dollar(amount);
	// }

	// static franc(amount: number) {
	// 	console.log(new Franc(amount));
	// 	return new Franc(amount);
	// }

	times(multiplier: number): Money {
		return new Money(0);
	}


	getCurrency(): string {
		return this.currency;
	}

}