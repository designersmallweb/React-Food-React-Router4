import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from '../containers'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    }
}

export default RouterMap;