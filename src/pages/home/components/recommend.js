import React,{PureComponent} from 'react';
import {connect} from 'react-redux'
import {
  RecommentWrapper,
  RecommentItem,
} from '../style'

class Recommend extends PureComponent {
  render(){
    return (
      <div>
        <RecommentWrapper>
          {
            this.props.list.map((item) => {
              return <RecommentItem imgUrl={item.get('img')} key={item.get('id')}/>  
            })
          }
        </RecommentWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
    list:state.getIn(['home','recommendList'])
});

export default connect(mapStateToProps,null)(Recommend);