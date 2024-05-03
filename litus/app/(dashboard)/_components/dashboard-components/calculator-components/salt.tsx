"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import { useState, ChangeEvent } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import BackgroundSVG from "@/app/_components/BackgroundSVG"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


const SaltCalculator = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    const [measuredSalinity, setMeasuredSalinity] = useState(35);
    const [aimedSalinity, setAimedSalinity] = useState(35);
    const [gramsPerLiter, setGramsPerLiter] = useState(39);
    const [volume, setVolume] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      switch (id) {
        case "measured":
          setMeasuredSalinity(parseFloat(value));
          break;
        case "aimed":
          setAimedSalinity(parseFloat(value));
          break;
        case "grams":
          setGramsPerLiter(parseFloat(value));
          break;
        case "volume":
          setVolume(parseFloat(value));
          break;
        default:
          break;
      }
    };

    const calcChange = () => {
      if (measuredSalinity < aimedSalinity) {
        const salinityDiff = aimedSalinity - measuredSalinity;
        const saltToAdd = gramsPerLiter * volume * (salinityDiff/aimedSalinity);
        return saltToAdd.toFixed(2);
      } else {
        const saltToRemove = measuredSalinity * gramsPerLiter - aimedSalinity * gramsPerLiter;
        const percentage = saltToRemove / (measuredSalinity * gramsPerLiter);
        const waterToRemove = volume * percentage;
        return waterToRemove.toFixed(2);

        /* WIP -- Literanzahl bei WW passt sich nicht gramsPerLiter an */

      }
      return 0;
    }

    return (
      <div className="m-4 md:m-0">
        <div className="flex flex-col lg:flex-row gap-x-3 justify-center items-center">
          <div className="w-full">
            <h2 className="text-2xl tracking-[-0.05em]">Salz<span className="text-4xl text-blue-500">.</span></h2>
            <Card className="min-h-[400px] h-full lg:w-[600px] ">
              <CardContent className="mt-4 flex gap-y-2 flex-col">
              <div>
                  <Label>Wasservolumen</Label>
                  <Input
                  type="number"
                  placeholder="0L"
                  id="volume"
                  onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Gemessener Salgehalt</Label>
                  <Input
                  type="number"
                  placeholder="35ppt"
                  id="measured"
                  onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Gewünschter Salzgehalt</Label>
                  <Input
                  type="number"
                  placeholder="35ppt"
                  id="aimed"
                  onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Dosiermenge für 35ppt auf 1L in g</Label>
                  <Input
                  type="number"
                  placeholder="39g"
                  id="grams"
                  onChange={handleChange}
                  />
                </div>
                <div>
                    {(volume !== 0 && aimedSalinity - measuredSalinity !== 0) && (measuredSalinity < aimedSalinity ? <div className="text-center">
                      Fügen Sie Ihrem Aquarium <span className="text-blue-500">{calcChange()}g</span> Salz hinzu, um den Salzgehalt um {aimedSalinity - measuredSalinity}ppt zu erhöhen.
                      </div> : <div>
                      Wechseln Sie <span className="text-blue-500">{calcChange()}L</span> Ihres Wassers mit Osmosewasser, um den Salzgehalt um {measuredSalinity - aimedSalinity}ppt verringern.  
                      </div>)}
                </div>                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
        
  );
}
 
export default SaltCalculator;