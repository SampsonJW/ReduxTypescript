import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Nav() {
    return ( 
    <Navbar className='navbar-small justify-content-left' bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand className='px-3'>Xero Practice</Navbar.Brand>
        <Link to='/counter' className='px-3'>
            COUNTER
          </Link>
          <Link to='/todo' className='px-3'>
            TODO
          </Link>
    </Navbar> 
    );
}

export default Nav;