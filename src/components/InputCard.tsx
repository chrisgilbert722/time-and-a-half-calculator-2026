import React from 'react';
import type { OvertimeInput } from '../logic/overtimeCalculations';

interface InputCardProps {
    values: OvertimeInput;
    onChange: (field: keyof OvertimeInput, value: number | boolean) => void;
}

export const InputCard: React.FC<InputCardProps> = ({ values, onChange }) => {
    return (
        <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Regular Hourly Rate */}
                <div>
                    <label htmlFor="regularHourlyRate">Regular Hourly Rate ($)</label>
                    <input
                        type="number"
                        id="regularHourlyRate"
                        value={values.regularHourlyRate}
                        onChange={(e) => onChange('regularHourlyRate', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.50"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your standard hourly pay rate
                    </span>
                </div>

                {/* Regular Hours Worked */}
                <div>
                    <label htmlFor="regularHours">Regular Hours Worked</label>
                    <input
                        type="number"
                        id="regularHours"
                        value={values.regularHours}
                        onChange={(e) => onChange('regularHours', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="168"
                        step="1"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Hours worked at regular pay rate (typically up to 40)
                    </span>
                </div>

                {/* Overtime Hours Worked */}
                <div>
                    <label htmlFor="overtimeHours">Overtime Hours Worked</label>
                    <input
                        type="number"
                        id="overtimeHours"
                        value={values.overtimeHours}
                        onChange={(e) => onChange('overtimeHours', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="128"
                        step="1"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Hours worked at time-and-a-half rate (1.5x)
                    </span>
                </div>
            </div>
        </div>
    );
};
