import React, { useCallback, useState } from "react";
import './MyForm.css'
import FormInput from "./FormInput.tsx"
import { useFormStateAndValidate } from "./hooks.tsx";

interface FieldProps {
    labelName: string,
    inputType: string,
    placeHolder: string
}

const inputFields: FieldProps[] = [
    {labelName: 'Name', inputType: 'text', placeHolder: 'Name'}, 
    {labelName: 'Age', inputType: 'number', placeHolder: '0'},
    {labelName: 'DOB', inputType: 'text', placeHolder: 'DD/MM/YYYY'}
]

const MyForm = () => {
    
    const {isSubmitValid, validateForm} = useFormStateAndValidate(inputFields);

    return (
        <div className="MainFormContainer">
            <div className="CustomForm">
                <h2 className="FormHeading">Fill the deatils and then submit</h2>
                <div className="FormInputs">
                    {inputFields.map((field, index) => {
                        return (
                            <FormInput 
                                key={`field_${index}`}
                                labelName={field.labelName} 
                                inputType={field.inputType}
                                placeHolder={field.placeHolder}
                                validateForm={validateForm}
                            />
                        )
                    })}
                </div>
                <div className="SubmitButton">
                    <button disabled={!isSubmitValid}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default MyForm