import React, { useState } from "react";
import './MyForm.css'
import FormInput from './FormInput.tsx'

interface FieldProps {
    labelName: string,
    inputType: string,
    placeHolder: string
}

const inputFields: FieldProps[] = [
    {labelName: 'Name', inputType: 'text', placeHolder: 'Name'}, 
    {labelName: 'Age', inputType: 'number', placeHolder: '0'}
]

const MyForm = () => {
    return (
        <div className="MainFormContainer">
            <div className="CustomForm">
                <h2 className="FormHeading">Fill the deatils and then submit</h2>
                <div className="FormInputs">
                    {inputFields.map((field, index) => {
                        return (
                            <FormInput 
                                labelName={field.labelName} 
                                inputType={field.inputType}
                                placeHolder={field.placeHolder}
                            />
                        )
                    })}
                </div>
                <div className="SubmitButton">
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default MyForm