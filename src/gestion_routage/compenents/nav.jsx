import { Link } from 'react-router-dom';

function Nav() {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">

        <div className="d-flex align-items-center">
          <img
            src="/pc.png"
            alt="laptop"
            width="30"
            className="me-2"
          />
          <h5 className="mb-0">Laptop</h5>
        </div>

        <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
          <li className="navbar-item">
            <Link to='/' className="nav-link">Home</Link>
          </li>
           <li className="nav-item">
            <Link to='/about' className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to='/question' className="nav-link">Question</Link>
          </li>
          <li className='nav-item'>
            <Link to='/panie' className="btn btn-secondary">panie</Link>
          </li>
        </ul>

      </div>
    </nav>
  </> 
  )
}

export default Nav;