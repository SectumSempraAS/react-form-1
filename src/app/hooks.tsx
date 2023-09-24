import { useCallback, useEffect, useState } from "react";
import { InputFieldParams, FieldValue } from "./interfaces";
import { getFormValuesState } from "./utils.ts";

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

const inputFields: InputFieldParams[] = [
    {id: 1, fieldName: 'username', labelName: 'Name', inputType: 'text', placeHolder: 'Name'}, 
    {id: 2, fieldName: 'age' ,labelName: 'Age', inputType: 'number', placeHolder: '0'},
    {id: 3, fieldName: 'dateOfBirth' ,labelName: 'DOB', inputType: 'text', placeHolder: 'DD/MM/YYYY'},
    {id: 4, fieldName: 'email' ,labelName: 'Email', inputType: 'text', placeHolder: 'example@gmail.com'},
    {id: 5, fieldName: 'mobileNumber' ,labelName: 'Mobile Number', inputType: 'text', placeHolder: '9462501990'}
]

const checkIfAllValuesValid = (fieldValuesArray: FieldValue[]) => {
    fieldValuesArray.forEach((fieldValue) => {
        if(fieldValue.validated == false) {
            return false;
        }
    })
    return true;
}

export const useFormStateAndValidate = () => {
    const [isSubmitValid, setIsSubmitValid] = useState(false);
    const [formFieldValues, setFormFieldValues] = useState<FieldValue[]>(getFormValuesState(inputFields));

    const setFieldValues = useCallback((fieldName: string, newValue: any, isValueValid: boolean) => {
        let invalidFieldCount = 0;
        const newFieldValueState: FieldValue[]  = formFieldValues.map((prevStateFormField) => {
            if(prevStateFormField.fieldName == fieldName) {
                if(!isValueValid) invalidFieldCount++
                return {...prevStateFormField, value: newValue, validated: isValueValid}
            } else {
                if(!prevStateFormField.validated) invalidFieldCount++;
                return prevStateFormField
            }
        })

        setFormFieldValues(newFieldValueState)

        console.log(newFieldValueState)

        console.log(invalidFieldCount)

        if(invalidFieldCount > 0) setIsSubmitValid(false);
        else setIsSubmitValid(true)
    }, [formFieldValues])

    return {
        formFieldValues: formFieldValues,
        inputFields: inputFields,
        isSubmitValid: isSubmitValid,
        setFieldValues: setFieldValues,
    }
}