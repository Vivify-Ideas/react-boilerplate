import { Img, ImgProps } from '@chakra-ui/react'
import React from 'react'
import logo from './../../assets/logo.svg'

export const Logo = (props: ImgProps) => (
  <Img src={logo} alt="Vivify Ideas" w="3rem" {...props} />
)

export default Logo
