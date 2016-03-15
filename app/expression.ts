import {Bank} from './bank';
import {Money} from './money';
import {Sum} from './sum';

export class Expression {
	reduce(bank: Bank, to: string): Money {
		return new Money(1, "USD");
	}

	plus(addend: Expression): Expression {
		return new Sum(this, addend);
	}

	times(multiplier: number): Expression {
		return null;
	}
}