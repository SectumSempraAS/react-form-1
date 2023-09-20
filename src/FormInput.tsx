import React, {FC, useCallback, useEffect, useState} from "react"

import './FormInput.css'
import { InputFieldParams } from "./interfaces"
import { ifFieldValueValid } from "./utils.ts"

interface FormInputProps {
    inputField: InputFieldParams
    setFieldValues: CallableFunction
}

// const getFromLocalStorage = (key, type) => {
//     const storedValue = localStorage.getItem(key)
//     if(!storedValue || storedValue === undefined) {
//         if(type === 'text') return ''
//         else if(type === 'number') return 0
//     } else {
//         return JSON.parse(storedValue);
//     }
// }

const FormInput:FC<FormInputProps> = ({inputField, setFieldValues}) => {
    const {labelName, fieldName, inputType} = inputField;
    // const storeValue = getFromLocalStorage(labelName, inputType)
    const [value, setValue] = useState();
    const [valid, setValid] = useState<boolean>(false);

    const handleFormInputChange = useCallback((e) => {
        setValue(e.target.value)
        setValid(ifFieldValueValid(e.target.value, fieldName))
    },[value])

    useEffect(() => {
        // localStorage.setItem(labelName, JSON.stringify(value))

        const delayInputTimeout = setTimeout(() => {
            console.log('value1', value)
            console.log('valid1', valid)
            setFieldValues(fieldName, value, valid)
        }, 500);

        return () => clearTimeout(delayInputTimeout);
        
    },[value, valid])

    return (
        <div className="FormInput">
            <label>{labelName}</label>
            <input type={inputType} value={value} onChange={handleFormInputChange}/>
            {valid ? '' : 'This value is not valid'}
        </div>
    )
}

export default FormInput