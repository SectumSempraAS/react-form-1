import { useCallback, useEffect, useState } from "react";

// const promiseCall = new Promise((resolve, reject) => {
//     fet
// })

// fetch('https://run.mocky.io/v3/eaf11838-69e7-4937-9e4f-b8ec9d117c73')

// useEffect(() => {
//     fetch('https://run.mocky.io/v3/eaf11838-69e7-4937-9e4f-b8ec9d117c73')
//     .then((response) => {
//         // we can only excecute response.json() one time
//         // so if we use response.json() in console.log before returning
//         // that will throw an error
//         return response.json();
//     })
//     .then((data) => {
//         const inputFields = data.fields
//         const initialFormState = inputFields.map((field) => {
//             return {...field, validated: false}
//         })
//         setFormFieldState(initialFormState)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// },[])


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

        console.log(newFormState)
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