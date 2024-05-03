"use client"

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useState } from "react";
import BallingComponent from "./balling-components/balling";
import TraceComponent from "./balling-components/trace";
import { BallingSwitch } from "@/components/ui/ballingSwitch";

const BallingCalculator = () => {
    const [active, setActive] = useState("Balling");

    const changeActive = () => {
        setActive(active === "Balling" ? "Trace" : "Balling");
    }

    return ( 
        <div className="m-4">
            <div className="w-full flex flex-grow justify-center items-center gap-4 mb-4 lg:mb-0">
                <Label className={cn(
                    "text-2xl text-gray-500"
                , active === "Balling" && "font-bold text-blue-500" )}>
                    Balling
                </Label>
                <BallingSwitch 
                    onCheckedChange={() => changeActive()}
                />
                <Label className={cn(
                    "text-2xl text-gray-500"
                , active === "Trace" && "font-bold text-blue-500" )}>
                    Trace
                </Label>
            </div>
            {
                active === "Balling" ? <BallingComponent /> : <TraceComponent />
            }
        </div>
     );
}
 
export default BallingCalculator;