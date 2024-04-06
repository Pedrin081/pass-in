import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonprops extends ComponentProps <"button">{
    transparent?: Boolean
}

export function IconButton ( {transparent,  ...props }: IconButtonprops ){
    return (
        <button 
            {...props}
         //className={transparent ? 
            //" bg-black/20 border border-white/10 rounded-md p-1.5" 
          //  : " bg-black/10 border border-white/10 rounded-md p-1.5"
        //}


        className={twMerge(
                "border border-white/10 rounded-md p-1.5",
                transparent ? "bg-black/20" : "bg-white/10",
                props.disabled ? "opacity-50" : null
        )}
        />
    )
}