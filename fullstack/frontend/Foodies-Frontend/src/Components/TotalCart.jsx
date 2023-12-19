import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const TotalCart = ({cartTotal}) => {
  console.log(cartTotal)
  return (
    <Heading>
     Total:{cartTotal}
    </Heading>
  )
}

export default TotalCart
