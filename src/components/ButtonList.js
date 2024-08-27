import React from 'react';
import Button from './Btn'

const list = ["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Movies","Stocks"]

const ButtonList = () => {
  return (
    <div className='my-2'>
      {list.map((item)=>{
        return <Button key={item} name={item} />
      })}
    </div>
  )
}

export default ButtonList
