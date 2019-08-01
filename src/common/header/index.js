import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {actionCreators}  from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
} from './style';

class Header extends Component{
	render (){
		const {focused,handleInputFocus,handleInputBlur,login,logout} = this.props;
		return (
			<HeaderWrapper>
					<Logo/>
				<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left">下载App</NavItem>

						{login ?<NavItem className="right" onClick={logout}>退出</NavItem>:
						<Link to='/login'><NavItem className="right">登录</NavItem></Link>
						}
						
						<NavItem className="right">
								<i className="iconfont">&#xe636;</i>
						</NavItem>
						<SearchWrapper>
							<CSSTransition
								in={focused}
								timeout ={200}
								classNames="slide"
							>
									<NavSearch
									className ={focused ? 'focused' : ''}
									onFocus = {handleInputFocus}
									onBlur = {handleInputBlur}
									></NavSearch>
							</CSSTransition>
							<i 
							className ={focused ? 'focused iconfont' : 'iconfont'}
							>&#xe637;</i>
						</SearchWrapper>
				</Nav>
				<Addition>
						<Link to='/write'>
							<Button className="writing">
									<i className="iconfont">&#xe624;</i>写文章
							</Button>
						</Link>
						<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps =(state) => {
		return {
			focused:state.getIn(['header','focused']),
			login:state.getIn(['login','login']),
		}
};
const mapDispathToProps = (dispatch) =>{
	return{
		handleInputFocus(){
				dispatch(actionCreators.searchFocus())
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		},
		logout(){
			dispatch(loginActionCreators.logout())
		}
	}
};

export default connect(mapStateToProps,mapDispathToProps)(Header);