import React, {useState} from 'react';
import NavbarItem from './NavbarItem';
import logo from '../../../public/images/logo.svg';
import LoopieButton from './LoopieButton';
import HamburgerMenu from 'react-hamburger-menu';
import MobileMenu from './mobile/MobileMenu';
export const navitems = [
  {
    name: 'Home',
    url: '/home',
  },
  {
    name: 'Pricing',
    url: '/pricing',
  },
  {
    name: 'About Us',
    url: '/aboutus',
  },
];

function Navbar(props) {
  let [open, setOpen] = useState(0);

  return (
    <div>
      <nav className="navbar main-nav fixed">
        <img className="logo" src={logo} alt="Loopie Laundry" />
        <div onClick={() => setOpen(!open)} className="nav-mobile">
          <HamburgerMenu
            isOpen={open}
            strokeWidth={3}
            rotate={0}
            width={22}
            height={20}
            color="white"
            borderRadius={4}
            animationDuration={0.3}
          />
        </div>
        <ul className="nav-item-container">
          {navitems.map((item) => (
            <NavbarItem to={item.url} key={item.name} item={item} />
          ))}
          <li className="navbar-item ">
            <a className="no-wrap" href="http://www.loopie.us">
              <LoopieButton
                text="Sign Up Today"
                color="primary"
                variant="filled"
              />
            </a>
          </li>
        </ul>
      </nav>
      <MobileMenu open={open} />
    </div>
  );
}

export default Navbar;
