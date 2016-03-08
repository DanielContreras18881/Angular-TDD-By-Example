import {Money} from './money'

export class Franc extends Money  {

	constructor(amount:number) {
		super(amount, "CHF");
	}

}