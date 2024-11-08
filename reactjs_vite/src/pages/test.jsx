import { Button } from "antd"
import styled from '@emotion/styled';
import './test.less'

const Test = ()=>{

    return (
        <>
          <MyButton bgcolor='blue'>Test Mine</MyButton>
          <p>ASD</p>
          <div className="content">
            <p>Test</p>
            <p className="top">Test2</p>
          </div>
        </>
    )
  
}

const MyButton = styled(Button) `
    color:${(props)=>props.bgcolor || 'red'}
`

export default Test