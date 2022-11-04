import logo from '../logo.svg'

function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
            <a href="/" className='navbar-brand'>
                <img src={logo} alt="React Logo" style={{width:"4em"}}/>
            </a>
        </div>
    </nav>
  )
}

export default NavBar