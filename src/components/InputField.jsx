
const InputField = ({label , type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label className='text-[#0f4b8f] pb-2 pl-2 text-2xl' >{label}</label>
      <div className='flex text-lg rounded-[20px] w-[304px] h-[47.2px] border-2 border-solid border-[#0f4b8e] overflow-hidden'>
        <input type={type} className='w-full outline-none px-4 text-[#0f4b8f]'  /> 
        </div>
    </div>
  )
}

export default InputField