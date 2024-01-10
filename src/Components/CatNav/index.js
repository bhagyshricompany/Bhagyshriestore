import './_cat-nav.scss';
import React from 'react'

const CatNav = () => {
  return (
    <>
       <div className='cat-nav-container container'>
        <ul>
          <li className='list-items'>
            <a href='#'>Men</a>
          </li>
          <li className='list-items'>
            <a href='#'>Women</a>
          </li>
          <li className='list-items'>
            <a href='#'>Kid</a>
          </li>
          <li className='list-items'>
            <a href='#'>Best Offer</a>
          </li>
        </ul>
      
      </div>
    </>
 
  )
}

export default CatNav
