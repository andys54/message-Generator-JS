
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BallingCalculator from "./calculator-components/balling-calculator";
import SaltCalculator from "./calculator-components/salt";

interface CalculatorComponentProps {
    activeSub: String
}

const CalculatorComponent = ({ activeSub }: CalculatorComponentProps ) => {
  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <div>
        <Tabs defaultValue="salt" className="w-full mt-6 flex justify-center items-center flex-col">
          <TabsList className="">
            <TabsTrigger value="salt">Salz</TabsTrigger>
            <TabsTrigger value="balling">Balling</TabsTrigger>
          </TabsList>
          <TabsContent value="salt"><SaltCalculator/></TabsContent>
          <TabsContent value="balling"><BallingCalculator/></TabsContent>  
      </Tabs>
    </div>
  </div>
  )
}
export default CalculatorComponent;
