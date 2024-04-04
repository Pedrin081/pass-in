import { ComponentProps } from "react"

interface NavLinksprops extends ComponentProps <"a">{
    children: string,
}

export function NavLinks(props: NavLinksprops){
    return (
        <div>

            <a {...props} className=' font-medium text-sm'>{props.children}</a>
        
        </div>
    )
}