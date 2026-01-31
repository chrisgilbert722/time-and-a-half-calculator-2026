import React from 'react';
import type { OvertimeResult } from '../logic/overtimeCalculations';

interface BreakdownTableProps {
    result: OvertimeResult;
}

const formatMoney = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
};

export const BreakdownTable: React.FC<BreakdownTableProps> = ({ result }) => {
    const payRows = [
        { label: 'Regular Pay', value: formatMoney(result.regularPay), isTotal: false },
        { label: 'Overtime Pay (1.5x)', value: formatMoney(result.overtimePay), isTotal: false },
        { label: 'Estimated Total Pay', value: formatMoney(result.totalWeeklyPay), isTotal: true },
    ];

    const hoursRows = [
        { label: 'Regular Hours', value: `${result.regularHours} hrs`, isTotal: false },
        { label: 'Overtime Hours', value: `${result.overtimeHours} hrs`, isTotal: false },
        { label: 'Total Hours Worked', value: `${result.totalHours} hrs`, isTotal: true },
    ];

    const renderTable = (rows: Array<{ label: string; value: string; isTotal: boolean }>, isLast = false) => (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} style={{
                        borderBottom: (isLast && idx === rows.length - 1) ? 'none' : '1px solid var(--color-border)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : '#F8FAFC'
                    }}>
                        <td style={{ padding: 'var(--space-3) var(--space-6)', color: 'var(--color-text-secondary)' }}>
                            {row.label}
                        </td>
                        <td style={{
                            padding: 'var(--space-3) var(--space-6)',
                            textAlign: 'right',
                            fontWeight: row.isTotal ? 700 : 400,
                            color: row.isTotal ? '#166534' : 'inherit'
                        }}>
                            {row.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="card" style={{ padding: '0' }}>
            {/* Pay Breakdown Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1rem' }}>Estimated Pay Breakdown</h3>
            </div>
            {renderTable(payRows)}

            {/* Hours Breakdown Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', background: '#F0FDF4' }}>
                <h3 style={{ fontSize: '1rem', color: '#166534' }}>Hours Summary</h3>
            </div>
            {renderTable(hoursRows, true)}
        </div>
    );
};
