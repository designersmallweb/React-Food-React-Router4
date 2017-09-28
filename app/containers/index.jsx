import React from 'react'
import { Switch, Route,withRouter} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Home from './Home'
import City from './City'
import User from './User'
import Search from './Search'
import Detail from './Detail'
import Login from './Login'
import NotFound from './404'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
            {this.state.initDone
                ?
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/city" component={City} />
                    <Route path='/user' component={User}/>
                    <Route path='/search/:category?/:keyword?' component={Search}/>
                    <Route path='/detail/:id?' component={Detail}/>
                    <Route path='/login/:router?' component={Login}/>
                    <Route component={NotFound}/>
                </Switch>
                :<div>加载中...</div>}
            </div>
        )
    }
    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })
        this.setState({
            initDone: true
        })

    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))