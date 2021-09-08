import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from './Text'

type Props = React.ComponentProps<typeof TouchableOpacity> & {
  title: string
  disabled?: boolean | null
}

const Button: React.FC<Props> = (props) => {
  const { title, style, disabled, ...restOfProps } = props

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { opacity: disabled ? 0.1 : 1 },
        style
      ]}
      {...restOfProps}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e20ea',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
})

export default Button
