import React from 'react'
import styled from 'styled-components'

export const Button = ({label, ...props}) =>
  <input
    type    = "button"
    value   = {label}
    onClick = {props.handleClick}
  />
