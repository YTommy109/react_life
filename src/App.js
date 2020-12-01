import React from 'react'
import { RecoilRoot } from 'recoil'
import RecoilLogger from 'recoil-logger'
import styled from 'styled-components'
import LifeContainer from './containers/life_container'

const Main = styled.div`
  display:          grid;
  justify-content:  center;
`

const App = () =>
  <React.StrictMode>
    <Main>
      <RecoilRoot>
        <RecoilLogger />
        <LifeContainer />
      </RecoilRoot>
    </Main>
  </React.StrictMode>


export default App
