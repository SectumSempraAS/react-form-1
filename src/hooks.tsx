import { useCallback, useState } from "react";

export const useFormStateAndValidate = (inputFields) => {
    const [isSubmitValid, setIsSubmitValid] = useState(false);
    const [formFieldState, setFormFieldState] = useState(inputFields.map((field) => {
        return {...field, validated: false}
    }));

    const validateForm = useCallback((labelName: string, fieldValue: any) => { 
        let isCurrentFieldValidated: boolean = false;

        if(labelName == 'Name') {
            if(typeof fieldValue == 'string' &&  /^[a-z ,.'-]+$/i.test(fieldValue)) {
                isCurrentFieldValidated = true;
            }
        } else if(labelName == 'Age') {
            if(fieldValue > 0 && fieldValue < 100) {
                isCurrentFieldValidated = true;
            }
        } else if(labelName == 'DOB') {
            if(typeof fieldValue == 'string' && /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/.test(fieldValue)) {
                isCurrentFieldValidated = true;
            }
        }

        const newFormState = formFieldState.map((field) => {
            if(field.labelName == labelName) {
                return {...field, validated: isCurrentFieldValidated}
            } else {
                return {...field}
            }
        })

        console.log(formFieldState)
        setFormFieldState(newFormState)

        let countFalse = 0;
        newFormState.forEach((field) => {
            if(field.validated == false) {
                countFalse++;
            }
        })

        if(countFalse > 0) {
            setIsSubmitValid(false)
        } else {
            setIsSubmitValid(true)
        }

    },[formFieldState])

    return {
        isSubmitValid: isSubmitValid,
        validateForm: validateForm
    }
}