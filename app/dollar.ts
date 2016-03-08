import {Money} from './money'

export class Dollar extends Money {

	constructor(amount: number) {
		super(amount, "USD");
	}

}