import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.less'

// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'


render(
    <Provider store={store}>
        <RouteMap />
    </Provider>,
    document.getElementById('root')
)
