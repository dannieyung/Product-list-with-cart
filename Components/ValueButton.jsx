
const ValueButton = ({ amount, increaseButton,decreaseButton,name}) => {
  
  return (
    <div className="absolute bg-[#c73a0f] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex gap-2 items-center text-rose900 font-semibold text-sm bg-dark-red px-4 py-2 rounded-3xl w-[155px]">
      <div className="flex justify-between items-center w-full ">
        <button
          className=" flex items-center outline outline-1 outline-white rounded-full p-1 w-4 h-4 hover:bg-slate-50 text-white hover:text-dark-red transition-colors"
          onClick={() => decreaseButton(name)}
        >
          <svg
            className="hover:fill-orange"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="#fff"
            viewBox="0 0 10 2"
          >
            <path d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </button>
        <span className="text-white">{amount}</span>
        <button
          className=" flex items-center outline outline-1 outline-white rounded-full p-1 w-4 h-4 hover:bg-white text-white hover:text-dark-red transition-colors"
          onClick={() => increaseButton(name)}
          key={name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#fff"
              className="hover:fill-orange"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ValueButton
