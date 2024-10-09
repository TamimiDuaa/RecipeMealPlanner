import React, { useContext, useState } from 'react'
import Nav from '../Nav'
import Library from '../Library'
import AuthContext from '../../auth/authSlice';
function ShoppingList() {
    const [shopList, setShopList] = useState({});

    const {user} = useContext(AuthContext);

    
    return (
    <>
    <div className='dashboard'>
        <Nav />
        <div className='main'>
            <Library/>
            <div>ShoppingList</div>
        </div>
       
    </div>
</>

    
  )
}

export default ShoppingList