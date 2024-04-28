import React from 'react'

function NavBarButtons(content) {
  // create a list of navbar buttons with url
  return (
    <li id={content.id}><a href={content.url}>{content.name}</a></li>
  )
}

export default NavBarButtons