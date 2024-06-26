import React, { ReactNode } from 'react'
import  { cn } from "../lib/utils"
function MaxWidthWrapper({className,children}:{className?:string, children:ReactNode}) {
  return (
    <div className={cn('h-full mx-auto w-full max-w-srceen-xl px-2.5 md:px-20',className )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper;
