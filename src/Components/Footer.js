import React from 'react'

const Footer = ({length}) => {
  return (
    <footer  className='bg-success p-2 text-white text-center fixed-bottom'>
      <p>{length} list {length===1 ?"item": "items"}</p>
    </footer>
  )
}

export default Footer
