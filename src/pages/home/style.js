import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:80%;
  margin:0 auto;
`

export const HomeLeft = styled.div`
  display:inline-block;
  vertical-align:top;
  width:64%;
  padding-top:30px;
  margin-left:15px;
  .banner-img{
    width:100%;
    height:240px;
  }
`

export const HomeRight = styled.div`
  display:inline-block;
  vertical-align:middle;
  width:30%;
  padding-left:4%
`

export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  margin-left:-10px;
  border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  display:inline-block;
  vertical-align:middle;
  height:32px;
  padding-right:10px;
  margin:10px 0 0 15px;
  font-size:14px;
  background:#f7f7f7;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic{
    display:inline-block;
    vertical-align:middle;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`

export const ListItem = styled.div`
  padding:20px 0 10px 0;
  margin-left:-10px;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:inline-block;
    vertical-align:middle;
    width:20%;
    height:100px;
    border-radius:20px;
  }
`

export const ListInfo = styled.div`
  display:inline-block;
  vertical-align:middle;
  width:78%;
  margin-left:2%;
  .title{
    line-height:27px;
    font-size:18px;
    color:#333;
  }
  .desc{
    line-height:24px;
    color:#999;
    font-size:13px;
  }
`
export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  color:#fff;
  border-radius:20px;
  text-align:center;
  cursor:pointer;
`

export const RecommentWrapper = styled.div`
  display:inline-block;
  vertical-align:top;
  margin:30px 0 10px;
  width:100%
`

export const RecommentItem = styled.div`
  width:100%;
  min-height: 45px;
  margin-bottom: 4px;
  border-radius: 4px;
  background:url(${(props)=>props.imgUrl}) no-repeat;
  background-size:contain;
`

export const WriterWrapper = styled.div`
  width:100%;
  border:1px solid #cdcdcd;
  height:300px;
`

export const BackTop = styled.div`
  position:fixed;
  right:100px;
  bottom:100px;
  width:60px;
  height:60px;
  text-align:center;
  line-height:60px;
  border:1px solid #ccc;
`