import React, {FC, useCallback, useState} from "react"

import './FormInput.css'

interface FormInputProps {
    labelName: string,
    inputType: string,
    placeHolder: string
}

const FormInput:FC<FormInputProps> = ({labelName, inputType, placeHolder}) => {
    const [value, setValue] = useState(placeHolder);

    const handleFormInputChange = useCallback((e) => {
        setValue(e.target.value)
    },[value])

    return (
        <div className="FormInput">
            <label>{labelName}</label>
            <input type={inputType} value={value} onChange={handleFormInputChange} />
        </div>
    )
}

export default FormInput