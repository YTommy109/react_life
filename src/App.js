import React from 'react'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import LifeGame from './containers/lifegame'

const Main = styled.div`
  display:          grid;
  justify-content:  center;
`

const App = () =>
  <Main>
    <RecoilRoot>
      <LifeGame />
    </RecoilRoot>
  </Main>


export default App
