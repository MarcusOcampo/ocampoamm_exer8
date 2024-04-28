import React from 'react'
import "./navBar.css"
import NavBarButtons from './navBarButtons';

const Navbar = () => {

  const menus = [
    { name: "Appliances", url: "#", id: 1},
    { name: "Groceries", url: "#", id: 2},
    { name: "Gadgets", url: "#", id: 3},
    { name: "Clothing", url: "#", id: 4},
  ];
    
  return (
    <div className= "parentNav">
      <div className='navi'>Lazado</div>
      <ul className='navButtons'>
        {/* create a menu in navbar with id and url from navbarbutton */}
        {menus.map(menu => <NavBarButtons name={menu.name} url={menu.url} key={menu.id} />)}
      </ul>
    </div>
  )
}

export default Navbar