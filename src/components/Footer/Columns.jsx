import React from 'react'
import { footerLinksColumnOne } from '../../data'

const Columns = () => {
  return (
    <div className='flex flex-col mt-10 md:mt-0 md:flex-row justify-around'>
      {footerLinksColumnOne.map((column, i) => (
        <div key={i} className='column text-white items-center my-4 md:my-0 flex flex-col md:items-start md:max-w-[30%]'>
            <p className='title font-semibold'>{column.title}</p>
            {column.links.map((link, id) => (
                <p key={id} className="links text-sm md:text-left">{link}</p>
            ))}
        </div>
      ))}
    </div>
  )
}

export default Columns
