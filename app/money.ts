import {Expression} from './expression';
import {Sum} from './sum';
import {Bank} from './bank';

export class Money implements Expression {

	constructor(public amount: number, 
				public currency: string) {}

	equals(money: Money): boolean {
		// Compare amount and types
		return this.amount === money.amount &&
			this.getCurrency() === money.getCurrency();
	}

	static dollar(amount: number): Money {
		return new Money(amount, "USD");
	}

	static franc(amount: number): Money {
		return new Money(amount, "CHF");
	}

	times(multiplier: number): Expression {
		return new Money(this.amount * multiplier, this.currency);
	}

	getCurrency(): string {
		return this.currency;
	}

	plus(addend: Expression): Expression {
		return new Sum(this, addend);
	}

	reduce(bank: Bank, to: string): Money {
		var rate = bank.rate(this.currency, to);
		return new Money(this.amount / rate, to);
	}

}