import { ModeToggle } from "@/components/ui/mode-toggle";
import CalculatorComponent from "../../_components/dashboard-components/calculator";
import DashboardComponent from "../../_components/dashboard-components/dashboard";
import DiaryComponent from "../../_components/dashboard-components/diary";
import WasserwerteComponentn from "../../_components/dashboard-components/wasserwerte";

interface DashboardRootProps {
    active: String,
    activeSub: String
}

const DashboardRoot = ({ active, activeSub }: DashboardRootProps ) => {
    if (active === "Dashboard") return ( <DashboardComponent /> )
    if (active === "Rechner") return ( <CalculatorComponent activeSub={activeSub} /> )
    if (active === "Tagebuch") return ( <DiaryComponent /> )
    if (active === "Wasserwerte") return ( <WasserwerteComponentn /> )
}
 
export default DashboardRoot;