import React from 'react';

export const SEOText: React.FC = () => {
    return (
        <div className="card" style={{ background: '#F8FAFC' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                This time-and-a-half calculator estimates overtime pay based on your hourly rate and hours
                worked beyond regular hours. These figures are estimates only and actual pay will depend on
                your employer's overtime policies, applicable labor laws, and employment classification.
                Calculations shown are before taxes and deductions. This calculator is for informational
                purposes and does not constitute legal or payroll advice.
            </p>
        </div>
    );
};
