"use client";

import React from "react";

interface RegistrationStepperProps {
  currentStep: number;
  totalSteps?: number;
  showStepText?: boolean;
}

export default function RegistrationStepper({
  currentStep,
  totalSteps = 3,
  showStepText = false,
}: RegistrationStepperProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <div className="flex items-center justify-center gap-1.5">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNumber = i + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={stepNumber}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isCompleted
                  ? "w-7 bg-[#3B9B63]"
                  : isCurrent
                  ? "w-7 bg-[#1773CF]"
                  : "w-7 bg-slate-200"
              }`}
            />
          );
        })}
      </div>
      {showStepText && (
        <span className="text-[11px] font-semibold text-slate-400 mt-1">
          Step {currentStep} of {totalSteps}
        </span>
      )}
    </div>
  );
}
