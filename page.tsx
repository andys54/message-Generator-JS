import { Button } from "@/components/ui/button";
import Navbar from "./_components/Navbar";
import { ArrowRight, Fish } from "lucide-react";


const Page = () => {
    return ( 
        <div className="">
            <Navbar />
            <div className="flex flex-col w-full justify-center items-center">
                <div className="text-5xl font-bold h-[276px] w-full flex align-items flex-col justify-center items-center bg-gradient-to-br from-sky-100 to-sky-600 bg-clip-text text-transparent">
                    
                    {/* TODO: Fix text flexbox */}

                    Bring dein Aquarium auf ein neues Level.
                </div>
                <div className="flex justify-center items-center">
                    <Button className="">
                        <ArrowRight  className="mr-1"/>
                        Get started
                    </Button>
                </div>
            </div>
        </div>
    )
}
 
export default Page;

