import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState, ChangeEvent } from "react";
import DosingCard from "./balling-calc-components/dosing-card";

const BallingComponent = () => {
    const [volume, setVolume] = useState(0);
    const [khOffsetActive, setKhOffsetActive] = useState(false);
    const [caOffsetActive, setCaOffsetActive] = useState(false);
    const [mgOffsetActive, setMgOffsetActive] = useState(false);
    const [measuredAlkalinity, setMeasuredAlkalinity] = useState(7.5);
    const [measuredCalcium, setMeasuredCalcium] = useState(425);
    const [measuredMagnesium, setMeasuredMagnesium] = useState(1325);
    const [aimedAlkalinity, setAimedAlkalinity] = useState(7.5);
    const [aimedCalcium, setAimedCalcium] = useState(425);
    const [aimedMagnesium, setAimedMagnesiu] = useState(1325);
    const [dosingKh, setDosingKh] = useState(20);
    const [dosingCa, setDosingCa] = useState(10);
    const [dosingMg, setDosingMg] = useState(10);
    const [khOffset, setKhOffset] = useState(1);
    const [caOffset, setCaOffset] = useState(1);
    const [mgOffset, setMgOffset] = useState(1);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        switch (id){
            case "measuredAlkalinity":
                setMeasuredAlkalinity(parseFloat(value));
                break;
            case "volume":
                setVolume(parseFloat(value));
                break;
            case "aimedAlkalinity":
                setAimedAlkalinity(parseFloat(value));
                break;
        }
    }

    const calcAlk = () => {
        return (aimedAlkalinity - (measuredAlkalinity * (khOffsetActive ? khOffset : 1))) * dosingKh * (volume/100);
    }

    return (
        <TooltipProvider>
            <div className="mx-8 flex flex-col">
                <div>
                    <Label>
                        Wasservolumen
                    </Label>
                    <Input 
                        placeholder="0L"
                        type="number"
                        id="volume"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-center gap-4 mt-5 h-[400px]">
                    <DosingCard 
                    measured={measuredAlkalinity.toString()}
                    setMeasured={setMeasuredAlkalinity}
                    aimed={aimedAlkalinity.toString()}
                    setAimed={setAimedAlkalinity}
                    volume={volume.toString()}
                    dosing={dosingKh.toString()}
                    setDosing={setDosingKh}
                    cardId="kh"
                    offset={khOffset}
                    setOffset={setKhOffset}
                    />
                    <DosingCard 
                    measured={measuredCalcium.toString()}
                    setMeasured={setMeasuredCalcium}
                    aimed={aimedCalcium.toString()}
                    setAimed={setAimedCalcium}
                    volume={volume.toString()}
                    dosing={dosingCa.toString()}
                    setDosing={setDosingCa}
                    cardId="ca"
                    offset={caOffset}
                    setOffset={setCaOffset}
                    />
                    <DosingCard 
                    measured={measuredMagnesium.toString()}
                    setMeasured={setMeasuredMagnesium}
                    aimed={aimedMagnesium.toString()}
                    setAimed={setAimedMagnesiu}
                    volume={volume.toString()}
                    dosing={dosingMg.toString()}
                    setDosing={setDosingMg}
                    cardId="mg"
                    offset={mgOffset}
                    setOffset={setMgOffset}
                    />
                </div>
            </div>
        </TooltipProvider>
     );
}
 
export default BallingComponent;