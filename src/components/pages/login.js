import React,{ useState, useContext,useEffect } from 'react';
import { GlobalContext } from '../context/StateManager';
import BG from '../images/bg.svg';
import Avatar from '../images/avatar.svg';


export default function Login({ history }) {

    const [name, setName ] = useState('');
    const [password, setPassword ] = useState('');

    const {  getUser,loggedIn } = useContext(GlobalContext); 

    const submit = e => {
        e.preventDefault();
        console.log('name',name);
        console.log('password',password)

        const params = {
            username: name,
            password:password
        }

        getUser(params)
    }

    useEffect(() => {
        console.log('logg data', loggedIn)
        if(!loggedIn){
            history.push('/login')
        }else {
            history.push('/')
        }
    }, [loggedIn])

    return (
        <>
            <div className='section' id='login'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column'>
                            <img className='vector-bg' src={BG} alt='vector-login'/>
                        </div>
                        <div className='column'>
                            <img className='avatar-bg' src={Avatar} alt='avatar-login'/>
                            <div className='login-form'>
                                <h2 className=' is-size-3 has-text-centered'>WELCOME</h2>
                                <form onSubmit={submit}>
                                    <div className='field'>
                                        <label className="label">Email</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Enter your Email.." value={name} onChange={ e => setName(e.target.value)}/>
                                            <span className="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>  
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className="label">Password</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input" type="password" placeholder="Enter your password.." value={password} onChange={ e => setPassword(e.target.value)}/>
                                            <span className="icon is-small is-left">
                                                <i class="fas fa-lock"></i>
                                            </span>  
                                        </div>
                                    </div>
                                    <button className='button' type='submit'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
