import React from "react";
import {useState} from 'react'
import Homeland from "../XD/homeland";
import User from "./user"
const Auto = () => {
    const [isShow,setIsShow]=useState(false)
    const [isLogIn,setIsLogIn]=useState(false)
    const [person,setPerson] =useState({
        email: '',
        name:'',
        password:'',
        surname:'',
    })
    const [info,setInfo]=useState([{
        
        email:'barada',
        password:'barada123',
        name:'barada',
        surname:'kareli'
    },
    {
        
        email:'dato',
        password:'dato123',
        name:'dato',
        surname:'kareli',
    },
    {
        
        email:'saba',
        password:'saba123',
        name:'saba',
        surname:'kareli',
    },

])
    const [auto,setAuto]=useState({
        mail:'',
        passwords:''
    })
    const handleSubmit = (e:any) =>{
        e.preventDefault()
        const filtered = info.find(item => item.email===auto.mail && item.password === auto.passwords)
        if(filtered)
        {
            setIsLogIn(true)
            setPerson({...filtered})
            setAuto({mail:'',passwords:''})
        }
        else {
            console.log('log in failed')
        }
    }
    return(
        <div>
            {
                isLogIn ?
                <div>
                    <h1 onClick={() => setIsLogIn(false)}>Log Out</h1>
                    <User
                    password={person.password}
                    email={person.email} 
                    surname={person.surname}
                    name={person.name}/>
                </div>
                :
            <form onSubmit={handleSubmit}>
                <input type="text" value={auto.mail}  onChange={(e) => setAuto({...auto, mail:e.target.value})} placeholder="username"/>
                <div>
                    <input type={isShow ? 'text' : 'password' } value={auto.passwords} onChange={(e) => setAuto({...auto, passwords:e.target.value})} placeholder="password"/>
                    <p onClick={() => setIsShow(!isShow)}>show password</p>
                </div>
                <button type="submit">log in</button>
            </form>
            }
        </div>
    )
}
export default Auto