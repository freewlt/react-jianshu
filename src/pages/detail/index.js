import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { actionCreators} from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends PureComponent {
  render(){
    return (
      <div>
        <DetailWrapper>
          <Header>{this.props.title}</Header>
          <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
        </DetailWrapper>
      </div>
    )
  }

  componentDidMount(){
    //:id的获取url参数
     this.props.getDetail(this.props.match.params.id)
    //?id=的获取url参数
    //this.props.getDetail(this.props.loaction.serach)
  }

}


const mapState = (state) => {
  return {
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content']),
  }
};

const mapDispatch = dispatch => ({
    getDetail(id){
      dispatch(actionCreators.getDetail(id))
    }
});

export default connect(mapState,mapDispatch)(withRouter(Detail));