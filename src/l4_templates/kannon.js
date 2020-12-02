import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Kannon = styled.div`
  width:                  100%;
  height:                 100%;
  display:                grid;
  grid-template-columns:  ${props=>props.left + ' ' + props.right};
  grid-column-gap:        1rem;
`

Kannon.propTypes = {
  left:         PropTypes.string,
  right:        PropTypes.string
}

Kannon.defaultProps = {
  left:         '1fr',
  right:        '1fr'
}

export default Kannon
