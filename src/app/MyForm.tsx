import React from "react";
import './MyForm.css'
import FormInput from "./FormInput"
import { useFormStateAndValidate } from "./hooks";
const MyForm = () => {
    
    const {isSubmitValid, inputFields, setFieldValues, formFieldValues} = useFormStateAndValidate();

    const handleSubmitButton = () => {
        console.log(formFieldValues)
    }

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
                    <button disabled={!isSubmitValid} onClick={handleSubmitButton}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default MyForm