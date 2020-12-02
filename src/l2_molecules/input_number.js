import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width:                  100%;
  display:                grid;
  grid-template-columns:  80px 120px;

  input {
    text-align:           right;
  }
`

export const InputNumber = ({id, label, value, ...props}) =>
  <Div>
    <label htmlFor  = {id}>
      {label}
    </label>
    <input
      id            = {id}
      type          = "number"
      value         = {value}
      onChange      = {props.handleChange || (() => {})}
    />
  </Div>
