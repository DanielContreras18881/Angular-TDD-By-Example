import {Expression} from './expression';

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

	times(multiplier: number): Money {
		return new Money(this.amount * multiplier, this.currency);
	}

	getCurrency(): string {
		return this.currency;
	}

	plus(addend: Money): Expression {
		return new Money(this.amount + addend.amount, this.currency);
	}

}