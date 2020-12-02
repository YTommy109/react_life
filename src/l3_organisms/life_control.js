import React from 'react'
import styled from 'styled-components'
import {Button} from '../l1_atoms/button'

const Frame = styled.div`
  color:            white;
  background-color: darkblue;
  padding:          1rem;
  border-radius:    12px;
`

export const LifeControl = ({size, ...props}) =>
  <Frame>
    <label
      htmlFor     = "size01">
        サイズ
    </label>
    <input
      id          = "size01"
      type        = "number"
      value       = {size}
      onChange    = {props.handleSize || (() => {})}
    />
    <br />
    <Button
      label       = "次"
      handleClick = {props.handleNextBoard}
    />
  </Frame>
