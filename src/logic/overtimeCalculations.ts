export interface OvertimeInput {
    regularHourlyRate: number;
    overtimeHours: number;
    regularHours: number;
}

export interface OvertimeResult {
    overtimePay: number;
    totalWeeklyPay: number;
    effectiveHourlyRate: number;
    regularPay: number;
    overtimeRate: number;
    totalHours: number;
    regularHourlyRate: number;
    overtimeHours: number;
    regularHours: number;
    message: string;
}

export function calculateOvertime(input: OvertimeInput): OvertimeResult {
    const { regularHourlyRate, overtimeHours, regularHours } = input;

    // Calculate overtime rate (1.5x regular rate)
    const overtimeRate = regularHourlyRate * 1.5;

    // Calculate pay amounts
    const regularPay = regularHourlyRate * regularHours;
    const overtimePay = overtimeRate * overtimeHours;
    const totalWeeklyPay = regularPay + overtimePay;

    // Calculate total hours
    const totalHours = regularHours + overtimeHours;

    // Calculate effective hourly rate
    const effectiveHourlyRate = totalHours > 0 ? totalWeeklyPay / totalHours : regularHourlyRate;

    // Generate message
    let message = '';
    if (overtimeHours > 0) {
        const overtimeBonus = overtimePay - (regularHourlyRate * overtimeHours);
        message = `Overtime adds $${overtimeBonus.toFixed(2)} extra to your weekly pay`;
    } else {
        message = 'Enter overtime hours to see additional earnings';
    }

    return {
        overtimePay,
        totalWeeklyPay,
        effectiveHourlyRate,
        regularPay,
        overtimeRate,
        totalHours,
        regularHourlyRate,
        overtimeHours,
        regularHours,
        message
    };
}
