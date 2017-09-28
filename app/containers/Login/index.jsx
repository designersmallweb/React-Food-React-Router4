import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo'
import Header from '../../components/Header'
import LoginComponent from '../../components/LoginComponent'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录" />
                {
                    this.state.checking?
                    <div>等待中</div>:
                    <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount() {
        this.doCheck()
    }
    loginHandle(username) {
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        const params = this.props.match.params
        const router = params.router

        if (router) {
            this.props.history.push(decodeURIComponent(router))
        } else {
            this.goUserPage()
        }
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            this.goUserPage()
        } else {
            this.setState({
                checking: false
            })
        }
    }
    goUserPage() {
        this.props.history.push('/user')
    }
}




function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))