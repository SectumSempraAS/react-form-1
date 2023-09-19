import React, {FC, useCallback, useEffect, useState} from "react"

import './FormInput.css'

interface FormInputProps {
    labelName: string,
    inputType: string,
    placeHolder: string,
    validateForm: CallableFunction
}

const getFromLocalStorage = (key, type) => {
    const storedValue = localStorage.getItem(key)
    if(!storedValue || storedValue === undefined) {
        if(type === 'text') return ''
        else if(type === 'number') return 0
    } else {
        return JSON.parse(storedValue);
    }
}

const FormInput:FC<FormInputProps> = ({labelName, inputType, placeHolder, validateForm}) => {
    const storeValue = getFromLocalStorage(labelName, inputType)
    const [value, setValue] = useState(storeValue);

    const handleFormInputChange = useCallback((e) => {
        setValue(e.target.value)
    },[value, validateForm])

    useEffect(() => {
        localStorage.setItem(labelName, JSON.stringify(value))

        const delayInputTimeout = setTimeout(() => {
            validateForm(labelName, value);
        }, 500);

        return () => clearTimeout(delayInputTimeout);
        
    },[value])

    return (
        <div className="FormInput">
            <label>{labelName}</label>
            <input type={inputType} value={value} onChange={handleFormInputChange} />
        </div>
    )
}

export default FormInput