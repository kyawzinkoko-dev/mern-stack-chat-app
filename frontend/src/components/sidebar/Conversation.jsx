

export default function Conversation() {
  return (
    <>
        <div className='flex items-center gap-2 hover:bg-sky-500  rounded px-2 py-1 cursor-pointer'>
            <div className=' avatar online '>
                <div className='rounded-ful w-12'>
                    <img src='https://avatar.iran.liara.run/public/girl' alt='user avatar'/>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-between gap-3'>
                    <p className=' font-bold text-gray-500'>John</p>
                    <span className='text-xl'>emogi</span>
                </div>
            </div>
        </div>
        <div className='my-0 py-0 divider  h-1'/>
    </>
  )
}
