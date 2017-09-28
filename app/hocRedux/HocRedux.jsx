import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


let getDisplayName = component => {
    return component.displayName || component.name || 'Component'
}
let mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}
let mapDispatchToprops = (dispatch) => {
    return {
        reduxActions: bindActionCreators(actionsLists, dispatch)
    }
}
export default ChildComponent =>
    connect(
        mapStateToProps.mapDispatchToprops
    )(class HocInheritance extends ChildComponent {
        static displayName = `HocInheritance(${getDisplayName(ChildComponent)})`
    })