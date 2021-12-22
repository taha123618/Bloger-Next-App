import { useState } from 'react'
import Link from 'next/link';
// use authentacation 
import { auth } from '../firebase'

const signup = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // authencation
            const result = await auth.createUserWithEmailAndpassword(email, password)
            await result.user.updateProfile({
                displayName: name
            })
            M.toast({ html: `Welcome ${result.user.displayName}`, classes: "yellow" })

        } catch (error) {
            M.toast({ html: err.message, classes: "red" })
            // for checking 
            console.log(name, email, password);
        }

        return (
            <>
                <div className="container center">
                    <h2> Sign-Up </h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="input_field">

                            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='btn #fb8c00 orange darken-1'>
                            SignUp
                        </button>
                        <Link href="/login">
                            <a>
                                <h5>Already Account</h5>
                            </a>
                        </Link>
                    </form>
                </div>
            </>
        )
    }

export default signup
}