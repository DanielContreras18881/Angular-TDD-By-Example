import {Money} from './money';
import {Expression} from './expression';
import {Sum} from './sum';
import {Pair} from './pair';

export class Bank {
	private rates: any = {};

	reduce(source: Expression, to: string): Money {
		return source.reduce(this, to);
	}

	rate(from: string, to: string): number {
		if (from === to) {
			return 1;
		}
		var rate = this.rates[new Pair(from, to).getRef()]
		return rate;
	}

	addRate(from: string, to: string, rate: number): void {
		this.rates[new Pair(from, to).getRef()] = rate;
	}
}