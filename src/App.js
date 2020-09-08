import React from 'react'
import { RecoilRoot } from 'recoil'
import RecoilLogger from 'recoil-logger'
import styled from 'styled-components'
import LifeGame from './containers/lifegame'

const Main = styled.div`
  display:          grid;
  justify-content:  center;
`

const App = () =>
  <React.StrictMode>
    <Main>
      <RecoilRoot>
        <RecoilLogger />
        <LifeGame />
      </RecoilRoot>
    </Main>
  </React.StrictMode>


export default App
