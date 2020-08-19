import React from 'react'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'
import Board from './components/board'

const Main = styled.div`
  display:          grid;
  justify-content:  center;
`

const App = () =>
  <React.Fragment>
    <h1>コンウェイのライフゲーム</h1>
    <Main>
      <RecoilRoot>
        <Board />
      </RecoilRoot>
    </Main>
  </React.Fragment>


export default App
