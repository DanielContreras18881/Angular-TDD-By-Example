import {DollarInterface} from './dollarInterface'
import {Money} from './money'

export class Franc extends Money implements DollarInterface {

	times(multiplier: number): Money {
		return new Franc(this.amount * multiplier);
	}

	currency(): string {
		return "CHF";
	}

}