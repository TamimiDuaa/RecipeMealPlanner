import React from 'react'
import Nav from '../Nav'
import Library from '../Library'
function Kitchen() {
  return (
    <>
        <div className='dashboard'>
            <Nav />
            <div className='main'>
                <Library/>
                <div>Kitchen</div>

            </div>
           
        </div>
    </>
   
  )
}

export default Kitchen