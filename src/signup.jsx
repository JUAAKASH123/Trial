import './signup.css'
import MyNavbar from './navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const [fromSignup, setFormSignup] = useState({
        fullname: '',
        username: '',
        email: '',
        phone: '',
        password: ''
    });


    const handlechange = (e) => {
        setFormSignup({
            ...fromSignup,
            [e.target.name]: e.target.value,
        });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUsers =
            JSON.parse(
                localStorage.getItem('Signup Data')
            )|| [];
        

        const userExist=existingUsers.some(
            (user)=>user.email===fromSignup.email
        );

        if (userExist){
            alert(" User Already Exist");
            return;
        }
        

        const updateUser=[...existingUsers,fromSignup]

        localStorage.setItem(
            'Signup Data',
            JSON.stringify(updateUser)

        );

        console.log(fromSignup);
        navigate('/login');
    }

    return (
        <>
            <MyNavbar />
            <div className="containe">
                <div className='con'>
                    <h3>SignUp</h3>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='feild'>
                            <label>Name</label>
                            <input type="text" name='fullname' onChange={handlechange}></input>
                        </div>
                        <div className='feild'>
                            <label>UserName</label>
                            <input type="text" name='username' onChange={handlechange}></input>
                        </div>
                        <div className='feild'>
                            <label>Email</label>
                            <input type="email" name='email' onChange={handlechange}></input>
                        </div>
                        <div className='feild'>
                            <label>Phone</label>
                            <input type='tel' name='phone' onChange={handlechange}></input>
                        </div>
                        <div className='feild'>
                            <label>Password</label>
                            <input type="password" name='password' onChange={handlechange}></input>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup