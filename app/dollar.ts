import {Money} from './money'

export class Dollar extends Money {

	constructor(amount: number) {
		super(amount);
		this.currency = "USD";
	}

	times (multiplier: number): Money {
		return new Dollar(this.amount * multiplier);
	}

}