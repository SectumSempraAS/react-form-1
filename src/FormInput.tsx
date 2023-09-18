import React, {FC, useCallback, useState} from "react"

import './FormInput.css'

interface FormInputProps {
    labelName: string,
    inputType: string,
    placeHolder: string,
    validateForm: CallableFunction
}

const FormInput:FC<FormInputProps> = ({labelName, inputType, placeHolder, validateForm}) => {
    const [value, setValue] = useState();

    const handleFormInputChange = useCallback((e) => {
        setValue(e.target.value)
        validateForm(labelName, e.target.value)
    },[value, validateForm])

    return (
        <div className="FormInput">
            <label>{labelName}</label>
            <input type={inputType} value={value} onChange={handleFormInputChange} />
        </div>
    )
}

export default FormInput