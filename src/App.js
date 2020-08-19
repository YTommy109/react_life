import React from 'react'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import LifeContainer from './containers/life'

const Main = styled.div`
  display:          grid;
  justify-content:  center;
`

const App = () =>
  <React.Fragment>
    <h1>コンウェイのライフゲーム</h1>
    <Main>
      <RecoilRoot>
        <LifeContainer />
      </RecoilRoot>
    </Main>
  </React.Fragment>


export default App
