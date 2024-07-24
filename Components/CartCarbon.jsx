

const CartCarbon = () => {
  return (
    <div className="flex items-center justify-center gap-2 bg-rose100 p-3 rounded-lg">
      <img
        src="/src/New Cart/assets/icon-carbon-neutral.svg"
        alt=""
        width={20}
        height={20}
      />
      <p className="text-black text-xs">
        This is a <b>carbon-neutral</b> delivery
      </p>
    </div>
  )
}

export default CartCarbon
