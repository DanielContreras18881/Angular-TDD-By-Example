import {Money} from './money';
import {Expression} from './expression';
import {Bank} from './bank';

export class Sum implements Expression {
	constructor(
		public augend: Expression,
		public addend: Expression) { }

	reduce(bank: Bank, to: string): Money {
		var amount: number = this.augend.reduce(bank, to).amount + 
			this.addend.reduce(bank, to).amount;
		return new Money(amount, to);
	}

	plus(addend: Expression): Expression {
		return new Sum(this, addend);
	}

	times(multiplier: number): Expression {
		return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
	}
}
