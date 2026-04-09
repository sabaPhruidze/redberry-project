import { useState } from "react";
import {
  type SignUpStep,
} from "../types/signup";

type UseSignUpModalStateParams = {
  onClose?: () => void;
};

export const useSignUpModalState = ({ onClose }: UseSignUpModalStateParams) => {
  const [currentStep, setCurrentStep] = useState<SignUpStep>(1);

  const isStepOne = currentStep === 1;
  const isStepTwo = currentStep === 2;
  const isStepThree = currentStep === 3;
  const goBackStep = () => setCurrentStep((prev) => (prev === 3 ? 2 : 1));

  const closeModal = () => {
    setCurrentStep(1);
    onClose?.();
  };

  return {
    currentStep,
    isStepOne,
    isStepTwo,
    isStepThree,
    goToStepTwo: () => setCurrentStep(2),
    goToStepThree: () => setCurrentStep(3),
    goBackStep,
    closeModal,
  };
};
