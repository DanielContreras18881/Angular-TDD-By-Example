import {Money} from './money';
import {Expression} from './expression';
import {Bank} from './bank';

export class Sum implements Expression {
	constructor(
		public augend: Money,
		public addend: Money) { }

	reduce(bank: Bank, to: string): Money {
		var amount: number = this.augend.amount + this.addend.amount;
		return new Money(amount, to);
	}

}
