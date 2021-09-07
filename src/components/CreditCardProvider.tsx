import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { def, get } from 'bdd-lazy-var/getter'
import CreditCardForm from './CreditCardForm'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from 'react-native'
import { FormModel } from '../types'

const CreditCardProvider: React.FC<Props> = (props) => {
  const formMethods = useForm({
    mode: 'onBlur',
    defaultValues: props.defaultValues || {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  })
  const { handleSubmit } = formMethods

  return (
    <FormProvider {...formMethods}>
      {typeof props.children === 'function' ? props.children({
        formMethods,
        handleSubmit,
      }) : props.children}
    </FormProvider>
  )
}

const styles = StyleSheet.create({
})

export default CreditCardProvider
