import React from 'react';
import feature from "../../public/assets/feature.png"

const Ads = () => {
  return (
    <div className='flex items-center overflow-auto justify-between gap-4 my-5'>
      <img src={feature} alt="ads" />
      <img src={feature} alt="ads" />
      <img src={feature} alt="ads" />
    </div>
  )
}

export default Ads