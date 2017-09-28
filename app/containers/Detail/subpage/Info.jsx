import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detai.js'
import DeatilInfo from '../../../components/DeatilInfo'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            info:false
        }
    }
    render() {
        return (
            <div>
                {this.state.info
                ?<DeatilInfo data={this.state.info} />
                :''}
            </div>
        )
    }
    componentDidMount() {
        var id=this.props.id
        var result=getInfoData(id)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                info:json
            })
        })
    }
}

module.exports = Info