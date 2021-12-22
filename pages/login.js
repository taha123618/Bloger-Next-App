import { useState } from 'react'
import Link from 'next/link';
// use authentacation 
import { auth } from '../firebase'
const login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // authencation
            const result = await auth.signInWithEmailAndPassword(email, password)
            M.toast({ html: `Welcome ${result.user.displayName}`, classes: "yellow" })

        } catch (error) {
            M.toast({ html: err.message, classes: "red" })
            // checking
            console.log(email, password);
        }

    return (
        <>
            <div className="container center">
                <h2> Please Login </h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input_field">
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                        <button type='submit' className='btn #fb8c00 orange darken-1'>
                            Login
                        </button>
                    <Link href="/signup">
                    <a>
                        <h5>Dont have Account</h5>
                    </a>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default login
}
