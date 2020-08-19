import {atom} from 'recoil'

const lifeState = atom({
  key:      "lifeState",
  default:  [
    [1, 1, 1],
    [1, 1, 1],
    [0, 0, 1]
  ]
})


export default lifeState
