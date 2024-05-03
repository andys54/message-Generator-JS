"use client"

import { ThemeProvider } from "@/components/ui/theme-provider";
import DashboardNavbar from "../../_components/dashboard-components/navbar/dashbaord-navbar";
import Sidebar from "../../_components/sidebar/page";
import DashboardRoot from "./page";
import { useState } from "react";

interface DashboardLayoutProps {
    children: React.ReactNode;
};

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {

    const [active, setActive] = useState("Dashboard");
    const [activeSub, setActiveSub] = useState("Salz");

    return (
            <main className="w-full h-screen flex">
                <div className="hidden lg:block h-full lg:w-[250px] bg-background">
                    <Sidebar active={active} setActive={setActive} activeSub={activeSub} setActiveSub={setActiveSub} />
                </div>
                <div className="flex flex-col flex-grow">
                    <DashboardNavbar />
                    <div className="border-t-[1px] border-secondary-background h-screen bg-background">
                        <DashboardRoot active={active} activeSub={activeSub} />
                    </div>   
                </div>
            </main>
)}
 
export default DashboardLayout;