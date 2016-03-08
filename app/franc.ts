import {Money} from './money'

export class Franc extends Money  {

	constructor(amount:number) {
		super(amount);
		this.currency = "CHF";
	}

	times(multiplier: number): Money {
		return new Franc(this.amount * multiplier);
	}

}