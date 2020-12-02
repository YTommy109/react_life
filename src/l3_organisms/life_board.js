import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin:       .5rem;
  padding:      .5rem;
`

const LifeTable = styled.table`
  border-collapse:    collapse;
  td {
    border:           thin solid silver;
  }
  .alive {
    animation:        blink 0.8s ease-in-out infinite alternate;
  }
  @keyframes blink{
    0%          {opacity:0;}
    100%        {opacity:1;}
  }
`

const Row = ({life, y, ...props}) =>
  <tr>
    {new Array(life.size).fill(0).map((it, idx) =>
      <td key={idx}>{life.isActive(idx+1, y) ?
        <span className='alive'>●</span> : <span>・</span>}
      </td>
    )}
  </tr>

export const LifeBoard = ({life, ...props}) =>
  <Div>
    <LifeTable>
      <tbody>
        {new Array(life.size).fill(0).map((it, idx) =>
          <Row
            key   = {idx}
            life  = {life}
            y     = {idx+1}
          />
        )}
      </tbody>
    </LifeTable>
  </Div>
