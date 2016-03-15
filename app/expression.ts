import {Bank} from './bank';
import {Money} from './money';

export class Expression {
	reduce(bank: Bank, to: string): Money {
		return new Money(1, "USD");
	}
}