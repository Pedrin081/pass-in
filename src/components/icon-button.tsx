import { ComponentProps } from "react";

interface IconButtonprops extends ComponentProps <"button">{
    transparent?: Boolean
}

export function IconButton ( {transparent, ...props }: IconButtonprops ){
    return (
        <button {...props}
         className={transparent ? 
            " bg-black/20 border border-white/10 rounded-md p-1.5" 
            : " bg-black/10 border border-white/10 rounded-md p-1.5"
        }
        />
    )
}