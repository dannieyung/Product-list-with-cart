import  { useEffect, useRef } from 'react'
import CartModalitem from './CartModalitem'
import { useDispatch, useSelector } from 'react-redux'
import CartTotal from './CartTotal'
import { CloseModal } from '../feature/Cart/cartSlice'
const CartModal = () => {
  const dispatch = useDispatch()
  const { isModalOpen } = useSelector((state) => state.cart)
  const dialogRef = useRef()
  const CloseModalbtn = ()=>{
    dispatch(CloseModal())
    
  }

   useEffect(() => {
    if (isModalOpen) {
      dialogRef.current.showModal()
    } else (
      dialogRef.current.close()
    )
      
         
       
     

   })

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/75 rounded-md open:min-w-full mb-0 p-8 md:open:min-w-[500px] md:mb-auto "
    >
      <div className="flex flex-col gap-4">
        <img
          src="/src/New Cart/assets/icon-order-confirmed.svg"
          alt=""
          width={50}
          height={40}
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-rose900 font-bold text-4xl">Order Confirmed</h2>
          <p className="text-rose300">We hope you enjoy your food!</p>
        </div>
        <div className="bg-rose50 px-4 rounded-lg">
          <CartModalitem />
          <CartTotal />
        </div>
        <button
          className="bg-[#c73a0f] w-full rounded-3xl mt-4 py-4 font-medium text-white hover:bg-[#78350f] transition-colors"
          onClick={CloseModalbtn}
        >
          Start New Order
        </button>
      </div>
    </dialog>
  )
}

export default CartModal
