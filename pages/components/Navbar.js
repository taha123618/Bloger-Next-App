import Link from "next/link"
import { auth } from "../../firebase"

const Navbar = (user) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link href="/">
            <a className="brand-logo">Bloger</a>
          </Link>
          <ul id="nav-mobile" className="right">
            {/* when user login */}
            {user ?
            <>
          <li><Link href="/createblog"><a>Create Blog</a></Link></li>
          <li> <button className='btn red bg-red-500' 
          onClick={() =>auth.signOut()}  >
          LogOut</button></li>
          </>
              :
              <>
              {/* user deatils are not avaible (not login) */}
              <li><Link href="/signup"><a>SignUp</a></Link></li>
              <li><Link href="/login"><a>Login</a></Link></li>
              </>
              }

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
