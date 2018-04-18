"use strict";

import { isValidIBAN, extractIBAN } from "ibantools";

export const starkIsIBANValidatorName: string = "starkIsIBAN";

export function starkIsIBAN(iban: string): boolean {
	if (typeof iban === "string") {
		//Since v2.0.0 of ibantools, isValidIBAN() is false if there is " " in the verified IBAN
		return isValidIBAN(extractIBAN(iban).iban);
	}
	return false;
}
