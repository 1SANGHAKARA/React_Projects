import React from 'react'

function Header() {
  return (
   <>
   <nav className='flex max-w-[1280px] justify-between	mx-0 my-auto h-[72px] items-center '>
    <div className='logo mx-8'>

        <img src="../public/brand_logo.png" alt="logo" />
    </div>
<ul  className='flex list-none	gap-[24px]'>
    <li href='#'>Menu</li>
    <li href='#'>Contact</li>
    <li href='#'>About</li>
    <li href='#'>Location</li>
</ul>
<button className='px-[12px] py-[16px] h-[32px] border-2 border-solid flex items-center mx-8 rounded-sm bg-red-700 text-white'> login </button>

   </nav>
   
   </>
  )
}

export default Header