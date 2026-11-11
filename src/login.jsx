import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import Signup from './signup'
import MyNavbar from './navbar'
import { useState } from 'react'

function Login() {

    const navigate = useNavigate();

    const [formLogin, setFormLogin] = useState({
        usernames: '',
        passwords: ''
    });


    const handlechange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const registerInfo = JSON.parse(localStorage.getItem('Signup Data') || `null`);
        console.log(registerInfo);

        const validUser = registerInfo.find((user) => {
            return user.username === formLogin.usernames &&
                user.password === formLogin.passwords;
        });

        if (validUser) {
            const token = crypto.randomUUID();
            localStorage.setItem("Login Token", token);
            alert("Login Sucssfull");
            navigate('/login');
        } else {
            alert("Login Failed")
        }
        console.log(formLogin);
    }

    return (
        <>
            <MyNavbar />
            <div className="containe">
                <div className='con'>
                    <h3>Welcome Back</h3>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='log'>
                            <label>Username</label>
                            <input type="text" name='usernames' onChange={handlechange}></input>
                        </div>
                        <div className='log'>
                            <label>Password</label>
                            <input type="password" name='passwords' onChange={handlechange} ></input>
                        </div>
                        <button className='login' type='submit'>LOGIN</button>
                        <h5>OR</h5>
                        <Link to="/signup">
                            <button className='signup' type='button'>SIGN UP</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login