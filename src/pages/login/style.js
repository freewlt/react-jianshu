import styled from 'styled-components'

export const LoginWrapper = styled.div`
   position:absolute;
   left:0;
   right:0;
   bottom:0;
   top:56px;
   z-index:0;
   background:#eee;
  ;`

  export const FormBox = styled.form`
    width:400px;
    height:180px;
    margin:50px auto;
    padding-top:10px;
    boder-shadow:0 0 8px rgba(0,0,.1);
    background:#fff;
  ;`

  export const Input = styled.input`
    display:block;
    width:50%;
    height:30px;
    padding:0 10px;
    margin 10px auto;
    color:#777;
    border:none;
    border:1px solid #ccc;
;`

export const Button = styled.button`
    display: block; 
    width:55%;
    height:30px;
    margin:10px auto;
    background:#319409;
    color:#fff;
    border:none;
    border-radius:20px;
    outline:none;
    cursor:pointer;

    
`