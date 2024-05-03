import { BallingSwitch } from "@/components/ui/ballingSwitch";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChangeEvent, useState } from "react";

interface DosingTraceCardProps {
    id: number,
    measured: number,
    setMeasured: Function, 
    aimed: number,
    setAimed: Function,
    last: number
    setLast: Function
    unit: Boolean,
    setUnit: Function,
    rest: number,
    setRest: Function,
}

const DosingTraceCard = ({ id, measured, setMeasured, aimed, setAimed, last, setLast, unit, setUnit, rest, setRest }: DosingTraceCardProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        switch (id){
            case "measured":
                setMeasured(parseFloat(value));
                break;
            case "aimed":
                setAimed(parseFloat(value));
                break;
            case "last":
                setLast(parseFloat(value));
                break;
            case "rest":
                setRest(parseFloat(value));
                break;
        }
    }

    const calcAdd = () => {
       const result = 1.0*aimed/measured; 
        return (((result*last) - last) * (!unit ? rest/100 : rest/5000)).toFixed(2);
    }

    const calcFuture = () => {
        const result = 1.0*aimed/measured; 
        return (result*last).toFixed(2);
    }

    return (
        <div className="w-full md:w-[350px] md:h-[505px] h-full flex flex-col flex-grow">
                <div className="-mt-2 text-2xl text-primary tracking-[-0.05em] font-extrabold">
                    trace {id}
                    <span className={cn("text-blue-500 font-bold text-4xl", id == 1 && "-ml-1")}>
                    .
                    </span>
                </div>
            <Card className="w-full gap-2 h-full flex flex-grow flex-col p-2">
                <CardContent className="flex gap-2 flex-col mt-2">
                <div>
                    <Label className="mb-1">
                        Letzte Menge von Trace {id} beim Anmischen
                    </Label>
                    <Input
                    placeholder="25ml"
                    type="number"
                    id="last"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>
                        Gemessener {
                            id === 1 ? " Strontium " : (id === 2 ? " Molybdän " : " Iod ")
                        } Wert
                    </Label>
                    <Input 
                    type="number"
                    id="measured"
                    placeholder={id === 1 ? "7,25mg/l" : (id === 2 ? "15mg/l" : "0,068mg/l")}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>
                        Gewünschter {
                            id === 1 ? " Strontium " : (id === 2 ? " Molybdän " : " Iod ")
                        } Wert
                    </Label>
                    <Input 
                    type="number"
                    id="aimed"
                    placeholder={
                        id === 1 ? "7,25mg/l" : (id === 2 ? "15mg/l" : "0,068mg/l")
                    }
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="w-full">
                        <Label>
                            Restmenge in Kanister {
                                id === 1 ? " Ca " : (id === 2 ? " Ca " : " KH ")
                            }
                        </Label>
                    </div>
                    <div className="flex flex-row gap-2 mb-1.5">
                        <p>in <span className={cn("", !unit && "text-blue-500")}>%</span></p>
                        <BallingSwitch onCheckedChange={() => setUnit(!unit)} className=""/>
                        <p className={cn("", unit && "text-blue-500")}>ml</p>
                    </div>
                    <Input 
                    type="number"
                    id="rest"
                    placeholder={unit ? "5000ml" : "100%"}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    {
                        (measured < aimed && rest != 0) && <div className="text-center">
                            Fügen Sie ihrem Kanister <span className="text-blue-500">{calcAdd()}ml</span> trace1 hinzu
                        </div>
                    }
                </div>
                <div>
                    {
                        (measured < aimed) && <div className="text-center">
                             Mischen Sie beim nächsten Mal <span className="text-blue-500">{calcFuture()}ml</span> trace1 hinzu
                        </div>
                    }
                </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default DosingTraceCard;