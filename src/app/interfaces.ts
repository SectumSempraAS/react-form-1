export interface InputFieldParams {
    id: number
    labelName: string
    fieldName: string
    inputType: string
    placeHolder: string
}

export interface FieldValue {
    id: number
    fieldName: string
    value: string|number|null
    validated: boolean
}