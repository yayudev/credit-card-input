import type {Validation} from "../types/validation";

export function validateName(name?: string): Validation {
    const errors: string[] = [];

    const isEmpty: boolean = !name;

    const valid: boolean = !isEmpty;

    if (isEmpty) {
        errors.push("Name is required");
    }

    return { valid, errors };
}

export function validateCCNumber(num: string): Validation {
    const errors: string[] = [];

    const isEmpty: boolean = !num;
    const isCorrectLength: boolean = num.length === 16;
    const isJustNumbers: boolean = /[0-9]{16}/.test(num);

    const valid: boolean = isCorrectLength && isJustNumbers;

    if (isEmpty) {
        errors.push("CC is required");
    }

    if (!isCorrectLength) {
        errors.push("CC should be 16 digits");
    }

    if (!isJustNumbers) {
        errors.push("CC should only contain numbers");
    }

    return { valid, errors };
}

export function validateExpiryDate(month: string, year: string): Validation {
    const errors: string[] = [];

    const parsedMonth: number = parseInt(month, 10);
    const parsedYear: number = parseInt(`20${year}`, 10);
    const currentDate: Date = new Date();
    const expiryDate: Date = new Date(parsedYear, (parsedMonth - 1));

    const areBothFieldsExistent: boolean = Boolean(month) && Boolean(year);
    const isMonthValid: boolean = parsedMonth >= 1 || parsedMonth <= 12;
    const isYearValid: boolean = Boolean(parseInt(year, 10))
    // Expiry date is usually 3-5 years since issued
    // but I'm too lazy to do the actual calculation so let's just leaved it at 6 :)
    const isYearWithinValidRange: boolean = (parsedYear - currentDate.getFullYear()) <= 6;
    const isDateInTheFuture: boolean = expiryDate > currentDate;

    const valid: boolean = areBothFieldsExistent
        && isMonthValid
        && isYearValid
        && isYearWithinValidRange
        && isDateInTheFuture;

    if (!areBothFieldsExistent) {
        errors.push("Date is required");
    }

    if (!isMonthValid) {
        errors.push("Month should be valid");
    }

    if (!isYearValid) {
        errors.push("Year should be valid");
    }

    if (!isYearWithinValidRange) {
        errors.push("Expiry date is not valid");
    }

    if (!isDateInTheFuture) {
        errors.push("Credit card already expired")
    }


    return { valid, errors };
}

export function validateCVC(num: string): Validation {
    const errors: string[] = [];

    const isCorrectLength: boolean = num.length === 3;
    const isJustNumbers: boolean = /[0-9]{3}/.test(num);

    const valid = isCorrectLength && isJustNumbers;

    if (!isCorrectLength) {
        errors.push("CVC should be 3 numbers");
    }

    if (!isJustNumbers) {
        errors.push("CVC should only contain numbers");
    }

    return { valid, errors };
}
