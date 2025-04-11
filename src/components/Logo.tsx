import { useEffect, useState } from "react";

type Props = {
    label: string;
    modeData: string;
}

export const Logo = ({label, modeData}: Props) => {

    const [mode, setMode] = useState<string>('');

    useEffect(() => {  
        if(modeData === "dark"){
            setMode('bg-primary-blue')
        }else if(modeData === "light"){
            setMode('bg-secondary-white')
        }
    })

    return(
        <h1 className="flex text-2xl font-bold mt-5"><div className={`w-1 h-8 mr-2 ${mode}`}></div>{label}</h1>
    )
}