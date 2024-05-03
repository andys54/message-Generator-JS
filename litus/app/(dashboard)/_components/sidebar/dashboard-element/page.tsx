import { cn } from "@/lib/utils";
import { Calculator, FlaskConical, Home, NotebookPen } from "lucide-react";

interface DashboardElementProps {
    title: string,
    active: String,
    setActive: Function,
}

const DashboardElement = ({ title, setActive, active } : DashboardElementProps) => {
    return (
        <div>
                <div className={cn(
                    "w-[210px] h-12 flex justify-left items-center text-white rounded-lg mb-4 hover:cursor-pointer",
                    active === title ? "bg-muted text-white" : "hover:bg-gray-900",
                    title === "Dashboard" && "mt-2"
                )} onClick={() => {
                    setActive(title)
                }}>
                    <div className="p-3">
                        {title === "Wasserwerte" && <FlaskConical />}
                        {title === "Dashboard" && <Home />}
                        {title === "Rechner" && <Calculator />}
                        {title === "Tagebuch" && <NotebookPen />}
                    </div>
                    <div className={cn(
                        "flex items-center justify-center"
                    )}>
                        {title}
                    </div>
                </div>

        </div>
    );
}
 
export default DashboardElement;