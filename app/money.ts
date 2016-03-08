// import {Franc} from './franc';
// import {Dollar} from './dollar';


export class Money {

	constructor(public amount: number, 
				public currency: string) {}

	equals(money: Money): boolean {

		// Compare amount and types
		return this.amount === money.amount &&
			this.getCurrency() === money.getCurrency();
	}

	// static dollar(amount: number): Dollar {
	// 	return new Dollar(amount);
	// }

	// static franc(amount: number) {
	// 	console.log(new Franc(amount));
	// 	return new Franc(amount);
	// }

	times(multiplier: number): Money {
		return new Money(this.amount * multiplier, this.currency);
	}


	getCurrency(): string {
		return this.currency;
	}

}