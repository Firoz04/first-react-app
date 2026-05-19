import React from 'react'

function Cart({items}) {
  return (
    <div>
      {items.length > 0 && <p>You have {items.length} items.</p>}
    </div>
  )
}

export default Cart
