import './navbar1.css'

function Navbar1() {
  
    return (
      <>
      <div className='navbar1-container clearfix'>
        <ul>
            <li><a className='logo' href='#'>Book Shop</a></li>
            <li className='navbar1-user-btn'><a href='#'>Register</a></li>
            <li className='navbar1-user-btn'><a href='#'>Login</a></li>
            <li className='navbar1-user-btn'><a href='#'>Wishlist</a></li>
            <li className='navbar1-user-btn'><a href='#'>Help</a></li>
        </ul>
      </div>
      </>
    )
  }
  
  export default Navbar1