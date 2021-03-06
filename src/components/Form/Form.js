import React from 'react'
import { useState } from "react";
import { MyButton } from "../UI/MyButton";
import { MyInput } from "../UI/MyInput";

export function Form({addPost}) {
    const [name,setTitle] = useState('')
    const [email,setMessage] = useState('')
    const [username,setUsername] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [validationErrorTitle,setValidationErrorTitle]=useState('true')
    const [validationErrorMessage,setValidationErrorMessage]=useState('true')
    

    const onSubmitPost =(event)=>{
        event.preventDefault()
        if (validationErrorTitle==='true' 
        && validationErrorMessage ==='true'
        && name!==''
        && email!==''){
    
          const post={
            id: Date.now(),
            name:name,
            email:email,
            username: username,
            address: {
              city: city,
              street: street             
              
          }
        }
        
          addPost(post)
          setTitle('') 
          setUsername('')     
          setMessage('')
          setCity('')
          setStreet('')
        }     
        
      }

    const onChangeTitle =(event)=>{  
        const { value } =event.target
        if (value.length>=6 || value.length===0 ){      
          setValidationErrorTitle('false')      
        }else if (value.length<6){
          setValidationErrorTitle('true')     
        }
        setTitle(value)  
      }

    const onChangeUsername =(event)=>{  
        const { value } =event.target  
        setUsername(value)  
      }

    const onChangeCity =(event)=>{  
        const { value } =event.target  
        setCity(value)  
      }
    const onChangeStreet =(event)=>{  
        const { value } =event.target  
        setStreet(value)  
      }

    
      const onChangeMessage =(event)=>{  
        const { value } =event.target
        if (value.length>=16 || value.length===0){      
          setValidationErrorMessage('false')      
        }else if (value.length<16){
          setValidationErrorMessage('true')  
        }
        setMessage(value)
      }

  return (
    <form>
    <h2>???????????????? ???????? ????????</h2>
    <label htmlFor="name">?????? ????????????????????????</label>
    <MyInput type="text"   
    id="name"            
    placeholder="?????????????? ?????? ????????????????????????"
    value= { name }
    onChange={ onChangeTitle }/>
    <span className={validationErrorTitle}>????????-???? ???????????????? ???? 1 ???? 5.</span>

    <label htmlFor="username">??????????????</label>
    <MyInput type="text"   
    id="username"            
    placeholder="?????????????? ??????????????"
    value= { username }
    onChange={ onChangeUsername }/>
    {/* <span className={validationErrorTitle}>????????-???? ???????????????? ???? 1 ???? 5.</span> */}

    <label htmlFor="city">??????????</label>
    <MyInput type="text"   
    id="city"            
    placeholder="?????????????? ??????????"
    value= { city }
    onChange={ onChangeCity }/>
    {/* <span className={validationErrorTitle}>????????-???? ???????????????? ???? 1 ???? 5.</span> */}

    <label htmlFor="street">??????????</label>
    <MyInput type="text"   
    id="street"            
    placeholder="?????????????? ??????????"
    value= { street }
    onChange={ onChangeStreet }/>
    {/* <span className={validationErrorTitle}>????????-???? ???????????????? ???? 1 ???? 5.</span> */}

    <label htmlFor="message">Email</label>
    <MyInput type="text"
    id="email"        
    placeholder="?????????????? email"
    value= { email }
    onChange={ onChangeMessage }/>
    <span className={validationErrorMessage}>????????-???? ???????????????? ???? 1 ???? 15.</span>

    <MyButton onClick={ onSubmitPost } type="submit">????????????????</MyButton>
  </form>  
  )
}