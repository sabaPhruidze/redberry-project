import { useState } from "react";
import {
  INITIAL_SIGN_UP_FORM,
  type SignUpFormValues,
  type SignUpStep,
} from "../types/signup";

type UseSignUpModalStateParams = {
  onClose?: () => void;
};

export const useSignUpModalState = ({ onClose }: UseSignUpModalStateParams) => {
  const [currentStep, setCurrentStep] = useState<SignUpStep>(1);
  const [signUpForm, setSignUpForm] = useState<SignUpFormValues>(
    INITIAL_SIGN_UP_FORM,
  );

  const isStepOne = currentStep === 1;
  const isStepTwo = currentStep === 2 || currentStep === 3;

  const updateField = (field: keyof SignUpFormValues, value: string) => {
    setSignUpForm((prev) => ({ ...prev, [field]: value }));
  };

  const closeModal = () => {
    setCurrentStep(1);
    setSignUpForm(INITIAL_SIGN_UP_FORM);
    onClose?.();
  };

  return {
    currentStep,
    isStepOne,
    isStepTwo,
    signUpForm,
    goToStepTwo: () => setCurrentStep(2),
    goToStepThree: () => setCurrentStep(3),
    goBackToStepOne: () => setCurrentStep(1),
    updateField,
    closeModal,
  };
};
