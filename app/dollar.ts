import {DollarInterface} from './dollarInterface'
import {Money} from './money'


export class Dollar extends Money {

	times (multiplier: number): Money {
		return new Dollar(this.amount * multiplier);
	}

	currency(): string {
		return "USD";
	}
}