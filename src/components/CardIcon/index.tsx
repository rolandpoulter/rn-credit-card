import React, { useCallback, useContext } from 'react'
import { Image, StyleSheet } from 'react-native'
import cardValidator from 'card-validator'
import LibraryContext from '../../LibraryContext'

type Props = {
  cardNumber: string
}

type Card = {
  icon: any
  animation: any
  alternativeAnimation?: any
}

const CARDS: Record<string, Card> = {
  visa: {
    icon: require('./icons/visa.png.js'),
    animation: require('./lottie/visa.json'),
  },
  mastercard: {
    icon: require('./icons/mastercard.png.js'),
    animation: require('./lottie/mastercard.json'),
  },
  'american-express': {
    icon: require('./icons/amex.png.js'),
    animation: require('./lottie/amex.json'),
    alternativeAnimation: require('./lottie/amexBlue.json'),
  },
  discover: {
    icon: require('./icons/discover.png.js'),
    animation: require('./lottie/discover.json'),
  },
}

debugger;

const CardIcon: React.FC<Props> = (props) => {
  const { LottieView } = useContext(LibraryContext)
  const { cardNumber } = props
  const { card } = cardValidator.number(cardNumber)

  const animRef = useCallback((node) => {
    if (node !== null) {
      node.play()
    }
  }, [])
  const data: Card = CARDS[card?.type || -1]

  if (!data) return null

  if (!LottieView) {
    return <Image style={styles.icon} source={{ uri: data.icon.data }} />
  }

  return (
    <LottieView
      ref={animRef}
      style={styles.lottie}
      source={data.animation}
      loop={false}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 48,
    height: 48,
  },
  lottie: {
    width: 36,
    height: 36,
  },
})

export default CardIcon
