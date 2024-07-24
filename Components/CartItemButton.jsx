
const CartItemButton = ({ text, OpenModalbtn}) => {
  return (
    <button
      className="bg-[#c73a0f] w-full rounded-3xl mt-4 py-4 font-medium text-white hover:bg-[#78350f] transition-colors"
      onClick={OpenModalbtn}
    >
      {text}
    </button>
  )
}

export default CartItemButton
