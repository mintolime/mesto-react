import React, { useState, useCallback, ChangeEvent } from 'react'
import { FormErrors, FormValues } from '../types/typesApp'

interface FormValidation {
  values: FormValues
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  errors: FormErrors
  isValid: boolean
  resetForm: (newValues?: FormValues, newErrors?: FormErrors, newIsValid?: boolean) => void
  setValues: React.Dispatch<React.SetStateAction<FormValues>>
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
}

export default function useFormAndValidation(): FormValidation {
  const [values, setValues] = useState<FormValues>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [isValid, setIsValid] = useState<boolean>(true)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: e.target.validationMessage })
    setIsValid(e.target.closest('form')?.checkValidity() ?? false)
  }

  const resetForm = useCallback(
    (newValues: FormValues = {}, newErrors: FormErrors = {}, newIsValid: boolean = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid }
}
