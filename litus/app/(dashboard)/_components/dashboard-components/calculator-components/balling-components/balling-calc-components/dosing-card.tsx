import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState, ChangeEvent } from "react";

interface DosingCardProps {
    measured: string,
    setMeasured: Function,
    aimed: string,
    setAimed: Function,
    volume: string,
    dosing: string, 
    setDosing: Function,
    cardId: string,
    offset: number,
    setOffset: Function
}

const DosingCard = ({ measured, setMeasured, aimed, setAimed, volume, dosing, setDosing, cardId, offset, setOffset}: DosingCardProps) => {
    const [offsetActive, setOffsetActive] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        switch (id){
            case "measured":
                setMeasured(parseFloat(value));
                break;
            case "aimed":
                setAimed(parseFloat(value));
                break;
            case "offset":
                setOffset(parseFloat(value));
                break;
        }
    }

    const calcAlk = () => {
        switch (cardId){
            case "kh":
                return (parseFloat(aimed) - (parseFloat(measured) * (offsetActive ? offset : 1))) * parseFloat(dosing) * (parseFloat(volume)/100);
            case "ca":
                return (parseFloat(aimed) - (parseFloat(measured) * (offsetActive ? offset : 1))) / 11 * parseFloat(dosing) * parseFloat(volume)/100;
            case "mg":
                return (parseFloat(aimed) - (parseFloat(measured) * (offsetActive ? offset : 1))) / 5 * parseFloat(dosing) * parseFloat(volume)/100;
        }
    }

    return ( 
        <div className="h-full flex:flex-col lg:w-[400px]">
                        <div className="text-2xl tracking-[-0.05em] font-extrabold mt-[400px] lg:-mt-2">
                    {cardId.toUpperCase()}
                    <span className="text-blue-500 font-bold text-4xl">
                    .
                    </span>
                </div>
                        <Card className="h-full text-sm lg:text-lg flex flex-col">
                            <CardContent>
                            {/* WIP --- bottom margin not fully functional on mobile */}

                                <div className="flex flex-row justify-between mt-4 mb-2 gap-1.5 items-center h-8">
                                    <Tooltip>
                                            <TooltipTrigger className="flex flex-row gap-1.5 items-center">
                                                <Switch 
                                                onCheckedChange={() => setOffsetActive(!offsetActive)}
                                                className=""/>
                                                <Label className={cn("text-gray-500",
                                                    offsetActive && "text-blue-500"
                                                )}>Offset</Label>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Soll Ihre zuvor eingestellte Abweichung miteinberechnet werden?</p>
                                            </TooltipContent>
                                    </Tooltip>
                                    <div>
                                        {offsetActive && 
                                        <Input 
                                        placeholder="1.0"
                                        type="number"
                                        onChange={handleChange}
                                        id="offset"
                                        pattern="[0-9]*"
                                        className="w-14 text-center -webkit-appearance-none"
                                        />}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        {cardId === "kh" && <Label>Gemessene Karbonathärte in °dKH</Label>}
                                        {cardId === "ca" && <Label>Gemessenes Calcium in mg/l</Label>}
                                        {cardId === "mg" && <Label>Gemessenes Magnesium in mg/l</Label>}
                                        <Input
                                        type="number" 
                                        placeholder={measured.toString() + (cardId === "kh" ? "°dKH" : "mg/l")}
                                        onChange={handleChange}
                                        id="measured"
                                        />
                                    </div>
                                    <div>
                                        {cardId === "kh" && <Label>Gewünschte Karbonathärte in °dKH</Label>}
                                        {cardId === "ca" && <Label>Gewünschtes Calcium in mg/l</Label>}
                                        {cardId === "mg" && <Label>Gewünschtes Magnesium in mg/l</Label>}
                                        <Input 
                                        type="number"
                                        placeholder={aimed.toString() + 
                                            (cardId === "kh" ? "°dKH" : "mg/l")

                                        }
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <div className="">
                                        <Label className={cn("my-2", cardId == "kh" && "text-sm")}>Dosierung, um
                                                {cardId === "kh" && " Ihre KH um 1°dKH"}
                                                {cardId === "ca" && " Ihr Ca um 11mg/l"}
                                                {cardId === "mg" && " Ihr Mg um 5mg/l"} pro 100L zu erhöhen?</Label>
                                        <Input 
                                        placeholder={dosing.toString() + "ml"}
                                        type="number"
                                        onChange={handleChange}
                                        />
                                    </div>
                                        { /* WIP --- center text and adjust box sizing */ 
                                            (((parseFloat(aimed) > parseFloat(measured)) || (offsetActive && (offset * parseFloat(measured)) < parseFloat(aimed))) && parseFloat(volume) !== 0) && <div className="font-semiboldv text-center">
                                                Dosieren Sie <span className="text-blue-500">{calcAlk()?.toFixed(2)}ml</span>, um 
                                                {cardId === "kh" && " Ihre KH "}
                                                {cardId === "ca" && " Ihr Ca "}
                                                {cardId === "mg" && " Ihr Mg "} 
                                                um {(parseFloat(aimed) - (parseFloat(measured) * (offsetActive ? offset : 1))).toFixed(1)}{cardId === "kh" ? "°dKH" : "mg/l"} zu erhöhen.
                                            </div>
                                        }
                                </div>
                            </CardContent>
                        </Card>
                    </div>
     );
}
 
export default DosingCard;