
function Button({btnText,className=""}) {
  return (
    <button className={` text-light bg-secondary w-32 h-10 rounded-full flex justify-center items-center ${className}`}>{btnText}</button>
  )
}

export default Button