import React from 'react';
import styled from 'styled-components'

const Table = styled.table`
  border-collapse:    collapse;
  td {
    border:           thin solid silver;
  }
`

const Cell = ({state, ...props}) =>
  <td>{state===1?'●':'・'}</td>

const Row = ({data, ...props}) =>
  <tr>
    {data.map(it =>
      <Cell state={it} />
    )}
  </tr>

const Board = ({state, ...props}) =>
  <figure>
    <figcaption>
        <input
          type    = "button"
          value   = "次"
          onClick = {props.handleForward}
        />
    </figcaption>
    <br />
    <Table>
      <tbody>
        {state.map(it =>
          <Row data = {it} />
        )}
      </tbody>
    </Table>
  </figure>


export default Board
