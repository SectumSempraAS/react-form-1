import React, { useCallback, useState } from "react";
import './MyForm.css'
import FormInput from "./FormInput.tsx"
import { useFormStateAndValidate } from "./hooks.tsx";

const MyForm = () => {
    
    const {isSubmitValid, inputFields, setFieldValues} = useFormStateAndValidate();

    return (
        <div className="MainFormContainer">
            <div className="CustomForm">
                <h2 className="FormHeading">Fill the deatils and then submit</h2>
                <div className="FormInputs">
                    {inputFields.map((field, index) => {
                        return (
                            <FormInput 
                                key={`field_${index}`}
                                inputField={field}
                                setFieldValues={setFieldValues}
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