import './navbar2.css';

function Navbar2() {
  return (
    <div className='search-container'>
      <ul className='navbar2-list'>
        <li className='navbar2-genre'><a href='#'>New in Stock</a></li>
        <li className='navbar2-genre'><a href='#'>Non-Fiction</a></li>
        <li className='navbar2-genre'><a href='#'>Fiction</a></li>
        <li className='navbar2-genre'><a href='#'>Childrens</a></li>
        <li className='navbar2-genre'><a href='#'>Educational</a></li>
      </ul>
      <input 
        type="input"
        className="search-input"
        placeholder="Search for a book or ISBN" 
        
      />
    </div>
  );
}

export default Navbar2;
