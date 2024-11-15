import React from 'react'

export default function SectionInfoOrderLine({infoKey, infoValue, size}: {
  infoKey: string;
  infoValue: string | number,
  size: 'checkout' | 'order'
}) {
  return (
    <div className="flex mt-4 justify-between">
      <div className={`pl-2.5 relative ${size === 'order' ? 'w-[28%]': 'w-[40%]'}`}>
        <span className="text-[16px] font-semibold before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-black before:absolute before:top-[10px] before:left-0">{infoKey}:</span>
      </div>
      <div className={`${size === 'order' ? 'w-[70%]': 'w-[58%]'} text-[16px] ${typeof infoValue === 'string' ? '' : 'text-[red]'}`}>
        {typeof infoValue === 'string' ? infoValue : (infoValue ? `${infoValue}₫` : 'Miễn phí')}
      </div> 
    </div>
  )
}
