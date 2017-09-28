import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/Info.jsx'
import Comment from './subpage/Comment.jsx'
import Buy from './subpage/Buy.jsx'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id=this.props.match.params.id
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment />
            </div>
        )
    }
}
module.exports = Detail