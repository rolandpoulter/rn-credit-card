import React, { useEffect } from 'react'
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form'
import { TextInput } from 'react-native'
import TextField from './TextField'

type Props = React.ComponentProps<typeof TextField> & {
  name: string
  rules: RegisterOptions
  validationLength?: number
  formatter?: (oldValue: string, newValue: string) => string
  onValid?: () => void
  onChange?: (formatted: string, text: string) => void
  disabled: boolean | null
}

const FormTextField = React.forwardRef<TextInput, Props>((props, ref) => {
  const {
    name,
    rules,
    validationLength = 1,
    formatter,
    onBlur,
    onValid,
    disabled,
    ...restOfProps
  } = props
  const { control, formState, trigger, watch } = useFormContext()
  const value = watch(name)

  useEffect(() => {
    async function validate() {
      const isValid = await trigger(name)
      if (isValid) onValid?.()
    }

    if (value.length >= validationLength) {
      validate()
    }
  }, [value, name, validationLength, trigger]) // eslint-disable-line react-hooks/exhaustive-deps

  if (disabled) {
    return null;
  }

  return (
    <Controller
      control={control}
      render={({ field }) => (
        <TextField
          // passing everything down to TextField
          // to be able to support all TextInput props
          {...restOfProps}
          disabled={disabled}
          ref={ref}
          testID={`TextField.${name}`}
          errorText={formState.errors[name]?.message}
          onBlur={(event) => {
            if (disabled) {
              return;
            }
            field.onBlur()
            onBlur?.(event)
          }}
          onChangeText={(text) => {
            if (disabled) {
              return;
            }
            const formatted = formatter ? formatter(field.value, text) : text
            field.onChange(formatted)
            if (props.onChange) {
              props.onChange(formatted, text)
            }
          }}
          value={field.value}
        />
      )}
      name={name}
      rules={rules}
    />
  )
})

export default FormTextField
