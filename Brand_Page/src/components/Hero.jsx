import React from 'react'
import './hero.css'

function Hero() {
  return (
<>

<div className='hero flex items-center h-auto'>
    <div className='flex flex-col gap-[36px] mx-7 mt-4'>
        <h1 className='font-extrabold	leading-[72px] text-[62px]	'>Your Feet Deserve The Best .</h1>
        <p className='font-bold max-w-[600px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit in consectetur itaque, vel est officia!</p>
        <div className='flex gap-[40px]'>
            <button className='text-[24px] border-2 border-solid px-3 rounded-sm border-emerald-800 bg-red-700 text-white  flex justify-center items-center'>shop now</button>
            <button className='text-[24px] border-2 border-solid px-3 rounded-sm border-emerald-800 flex justify-center items-center'>category</button>
        </div>
        <div className='shopping flex flex-col gap-3'>
            <p>Available on .</p>
            <div className='flex gap-4 flip items-center '>
                <img src="../public/amazon.png" alt="" />
                <img src="../public/flipkart.png" alt="" />
            </div>
        </div>
    </div>
    <div>
        <img src="../public/hero-image.png" alt="" className='img' />
    </div>
</div>



</>
  )
}

export default Hero