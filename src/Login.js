import React, {useState} from 'react'
import './style/Login.css'
import logo from './Logo/logo.png';
import { Link , useHistory} from "react-router-dom"
import { auth } from './firebase';


function Login() {
    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e=> {
        e.preventDefault();

        // some fancy firebase login shittt.....

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message));

       
    }

    const register = e => {
        e.preventDefault();

        // do some fancy firbase register shittt ....

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
        })
    
        if (auth) {
            history.push('/')
        }

    }


    return (
        <div className="login">
            <Link to='/'>

                <img
                    className="login_logo"
                    src={logo}
                />

            </Link>

            <div className="login_container" >
                
                <h1>Sign-In</h1>

                <from>

                    <h5>E-mail</h5>
                    <input className="inputFiled" type="email" value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input className="inputFiled"  type="pasword" value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    <button onClick={signIn} className="login_singInButton">Sign In</button>

                </from>

                <p>
                    By signing-in your agree to AMAZON FAKE CLONE Condition fo Use & Sale. Please see our Privicy Notice, Our Cookies Notice and our Interest-Basked Ads Notice.
                </p>

                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>


            </div>

       
        </div>
    )
}

export default Login
