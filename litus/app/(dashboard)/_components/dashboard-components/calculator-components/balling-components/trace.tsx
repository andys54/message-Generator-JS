import { useState } from "react";
import DosingTraceCard from "./balling-calc-components/dosing-trace-card";

const TraceComponent = () => {
    const [measuredSr, setMeasuredSr] = useState(7.25);
    const [measuredMo, setMeasuredMo] = useState(15);
    const [measuredI, setMeasuredI] = useState(0.068);
    const [aimedSr, setAimedSr] = useState(7.25);
    const [aimedMo, setAimedMo] = useState(15);
    const [aimedI, setAimedI] = useState(0.068);
    const [last1, setLast1] = useState(25);
    const [last2, setLast2] = useState(25);
    const [last3, setLast3] = useState(25);
    const [unit1, setUnit1] = useState(false); // false -> %, true -> ml
    const [unit2, setUnit2] = useState(false); 
    const [unit3, setUnit3] = useState(false); 
    const [restCa, setRestCa] = useState(100);
    const [restKh, setRestKh] = useState(100);

    return ( 
        <div className="flex flex-col sm:flex-row flex-grow justify-center gap-4 px-2 lg:mt-2 h-[476px] mt-[440px]">
            <DosingTraceCard 
            id={1}
            measured={measuredSr}
            setMeasured={setMeasuredSr}
            aimed={aimedSr}
            setAimed={setAimedSr}
            last={last1}
            setLast={setLast1}
            unit={unit1}
            setUnit={setUnit1}
            rest={restCa}
            setRest={setRestCa}
            />
            <DosingTraceCard id={2}
            measured={measuredMo}
            setMeasured={setMeasuredMo}
            aimed={aimedMo}
            setAimed={setAimedMo}
            last={last2}
            setLast={setLast2}
            unit={unit2}
            setUnit={setUnit2}
            rest={restCa}
            setRest={setRestCa}
            />
            <DosingTraceCard id={3}
            measured={measuredI}
            setMeasured={setMeasuredI}
            aimed={aimedI}
            setAimed={setAimedI}
            last={last3}
            setLast={setLast3}
            unit={unit3}
            setUnit={setUnit3}
            rest={restKh}
            setRest={setRestKh}
            />
        </div>
     );
}
 
export default TraceComponent;