import React from 'react'
import styled from 'styled-components'
import {Button} from '../l1_atoms/button'
import {InputNumber} from '../l2_molecules/input_number'

const Div = styled.div`
  width:              100%;
  color:              white;
  background-color:   darkblue;
  margin:             .5rem;
  padding:            .5rem;
  border-radius:      12px;
  display:            grid;
  grid-template-rows: 30px 30px 1fr;
  grid-row-gap:       20px;
`

const Area = styled.div`
  width:              100%;
  text-align:         right;
`

export const LifeControl = ({size, ...props}) =>
  <Div>
    <InputNumber
      id            = "size01"
      label         = "サイズ"
      value         = {size}
      handleChange  = {props.handleSize}
    />
    <Area>
      <Button
        label       = "次"
        handleClick = {props.handleNextBoard}
      />
    </Area>
  </Div>
