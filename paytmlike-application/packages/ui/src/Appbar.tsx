import { Button } from "./button";

interface AppbarProps{
    user?:{
        name?:string | null;
    },
    onSignin:any,
    onSignout:any
}
export const Appbar = ({
    user,
    onSignin,
    onSignout
}:AppbarProps)=>{
    return(
        <div className="flex justify-between border-b px-4">
            <div>
                
            </div>
        </div>
    )
}