"use client"

import { Roboto } from "next/font/google";

import { cn } from "@/lib/utils";
import { Fish } from "lucide-react";


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import DashboardElement from "./dashboard-element/page";
import { ModeToggle } from "@/components/ui/mode-toggle";
  

const roboto = Roboto({
    subsets: ["latin"],
    display: 'swap',
    weight: ['700']
})

interface SidebarProps {
    setActive: Function,
    active: String,
    activeSub: String,
    setActiveSub: Function
}

// {* Just for test purpose, remove when database is implemented*}
const dashboardElements = ["Dashboard", "Rechner", "Wasserwerte", "Tagebuch"];

const aquariums = [
    {titleName: "RedSea", id: 0, liter:400, start:"04052023"},
    {titleName: "Eheim", id: 1, liter:700, start:"02032024"},
    {titleName: "Ati", id: 2, liter:1250, start:"11012013"}
]



const Sidebar = ({ active, setActive, activeSub, setActiveSub } :SidebarProps) => {


    return (
        <div className="border-r-[1px] border-secondary-background bg-background w-[250px] text-gray-500 z-40">
            <div className={cn("text-5xl flex justify-left pl-5 items-center w-[250px] h-[125px] text-primary tracking-[-0.05em]", roboto.className)}>
                litus<span className="text-blue-500">.</span>
            </div>
            <div className="flex justify-center">
            <Select>
                <SelectTrigger className="w-[210px] h-12">
                    <SelectValue placeholder="Aquarium" />
                </SelectTrigger>
                <SelectContent>    
                    {aquariums.map(({ titleName, id }) => (
                        <SelectItem 
                            key={id} 
                            value={titleName} 
                >
                    {titleName}
                </SelectItem>
                    ))} 
                </SelectContent>
            </Select>
            </div>
            <div className="ml-6 mt-4 pb-4 text-sm">
                Menu
            </div>
            <div className="fixed h-full w-[250px] flex justify-center bg-background border-r-[1px] border-secondary-background">
                <div className="p">
                    {
                    dashboardElements.map((elementTitle) => 
                        <DashboardElement 
                            key={elementTitle}
                            title={elementTitle}
                            active={active}
                            setActive={setActive}
                        />
                    )}å
                    <div className="mt-[300px]">
                        <div className="ml-3 text-sm">
                            Settings
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;