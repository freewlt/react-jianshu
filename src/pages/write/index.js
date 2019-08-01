import React,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


class Write extends PureComponent {
  render(){
    const {loginStatus} = this.props;
    if(loginStatus){
      return (
          <div>
            写文章
          </div>
      )
    }
    else{
      return <Redirect to='/login' />
    }
  }
}


const mapState = (state) => ({
   loginStatus:state.getIn(['login','login']),
})

const mapDispatch = (dispatch) => ({
  // login(accountElem,passwordElem){
  //   dispatch(actionCreators.login(accountElem.value,passwordElem.value))
  // }
})

export default connect(mapState,mapDispatch)(Write);