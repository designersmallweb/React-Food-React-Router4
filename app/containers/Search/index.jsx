import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Route} from 'react-router-dom'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.match.params
        return (
            <div>
            <SearchHeader keyword={params.keyword}/>
            <SearchList category={params.category} keyword={params.keyword}/>
            </div>
        )
    }
}
module.exports = Search