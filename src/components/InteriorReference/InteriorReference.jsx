import React from 'react'
import item1 from "../../assets/item1.jpg"
import item2 from "../../assets/item2.jpg"
import item3 from "../../assets/item3.jpg"

const InteriorReference = () => {
  return (
    <div className='interiorReference flex flex-col items-center'>
      <p className='text-4xl font-bold'>Interior Plant Reference</p>
      <p className='text-md mt-4 mb-6'>make your home so comfortable with refreshing plants</p>
      <div className="images grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-20 md:h-[84vh]">
        <div className='interiorItem relative'>
            <img src={item1} alt="Interior" className='w-full rounded-[30px] h-[40vh] object-cover hover:brightness-50 transition-all'/>
            <p className='interiorItemP -mt-[20vh]'>living room</p>
        </div>
        <div className='interiorItem row-span-2 object-cover relative'>
            <img src={item2} alt="Interior" className='w-full rounded-[30px] h-[40vh] md:h-[84vh] object-cover hover:brightness-50 transition-all'/>
            <p className='interiorItemP -mt-[42vh]'>office</p>
        </div>
        <div className='interiorItem relative'>
            <img src={item3} alt="Interior"  className='w-full rounded-[30px] h-[40vh] object-cover hover:brightness-50 transition-all'/>
            <p className='interiorItemP -mt-[20vh]'>room</p>
        </div>
      </div>
    </div>
  )
}

export default InteriorReference
