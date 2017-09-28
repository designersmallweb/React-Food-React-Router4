import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {withRouter} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import BuyAndStore from '../../../components/BuyAndStore'
import * as storeActionsFromFile from '../../../actions/store.js'
class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
            <div>
                <BuyAndStore
                isStore={this.state.isStore}
                buyHandle={this.buyHandle.bind(this)}
                storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }
    buyHandle() {
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }
        this.props.history.push('/user')
    }
    storeHandle() {
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }
        const id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            storeActions.rm({ id: id })
        } else {
            storeActions.add({ id: id })
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            this.props.history.push('/login/' + encodeURIComponent('/detail/' + id))
            return false
        } else {
            return true
        }
    }
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store
        store.some(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                })
                return true
            }
        })
    }
    componentDidMount() {
        this.checkStoreState()
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy))