import { InputFieldParams, FieldValue } from "./interfaces"

export const getFormValuesState = (fieldParameterArray: InputFieldParams[]) => {
    const result : FieldValue[] = []
    fieldParameterArray.forEach((field) => {
        const fieldValueObject: FieldValue = {
            id: field.id,
            fieldName: field.fieldName,
            value: null,
            validated: false
        }
        result.push(fieldValueObject)
    })
    return result;
}

export const ifFieldValueValid = (value: any, feildName: string) => {
    switch(feildName) {
        case 'username': {
            if(/^[a-zA-Z ]{2,30}$/.test(value)) return true
            return false
        }

        case 'age': {
            console.log(typeof value)
            if(typeof value === 'string' && parseInt(value) > 0 && parseInt(value) < 120) return true
            return false
        }

        case 'dateOfBirth': {
            if(typeof value == 'string' && /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/.test(value)) return true
            return false
        }

        case 'email': {
            if(String(value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) return true
            return false
        }

        case 'mobileNumber': {
            if(typeof value === 'string' && value.length === 10) return true
            return false
        }

        default: 
            return true
    }
}