import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height:56px;
    width:100%;
    margin:0 auto;
    min-width: 900px;
    border-bottom:1px solid #ccc;
  ;`

  export const Logo = styled.a.attrs({
    href:'/'
  })`
    display:inline-block;
    vertical-align:middle;
    width:10%
    height:56px;
    background:red;
    background:url(${logoPic}) no-repeat;
    background-size:contain;
    cursor:pointer;
  ;`

  export const Nav = styled.div`
    display:inline-block;
    vertical-align:middle;
    width:68%;
    height:100%;
    margin:0 auto;
    box-sizing:border-box;
  `

  export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
      float:left
    }
    &.right{
      float:right;
      color:#969696;
    }
    &.active{
      color:#ea6f5a;
    }
  `

  export const SearchWrapper = styled.div`
    position:relative;
    height:38px;
    float:left;
    margin-top:9px;
    margin-left:20px;
    &.slide-enter{
      transition:all .2s ease-out;
    }
    &.slide-enter-active{
      width:240px;
    }
    &.slide-exit{
      transition:all .2s ease-out;
    }
    &.slide-exit-active{
      width:160px;
    }
    .zoom{
      position:absolute;
      right:10px;
      top:10px;
      &.focused{
        top:8px;
        background:#777;
        color:#fff;
        border-radius:19px;
        padding:2px;
      }
    }
  `
  export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    background:#fff;
    border:1px solid #cccc;
    box-shadow:0 0 8px rgba(0,0,.2)
  `
  export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
    transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
  color: #787878;
  border:1px solid #ccc;
	border-radius: 3px;
`;

  export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
  })`
    width:163px;
    height:38px;
    padding:0 35px 0 20px;
    border:none;
    outline:none;
    box-sizing:border-box;
    border-radius:19px;
    background:#eeeeee;
    color:#666;
    font-size:14px;
    &::placeholder{
      color:#999;
    }
    &.focused{
      width:240px;
    }
  
  `
  export const Addition = styled.div`
    display:inline-block;
    vertical-align:middle;
    width:20%;
  `

  export const Button = styled.div`
    float:right;
    padding:0 15px;
    margin: 0 5px;
    line-height:28px;
    border-radius:19px;
    border:1px solid #ec6149;
    box-sizing:border-box;
    &.reg{
      color:#ec6149;
    }
    &.writing{
      color:#fff;
      background:#ec6149;
    }
  `

