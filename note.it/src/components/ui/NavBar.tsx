import Link from "next/link";
import { buttonVariants } from "./button";

import { Pattaya } from 'next/font/google'
import { UserButton } from "@clerk/nextjs";
const pattaya = Pattaya({ subsets: ['latin'], weight: "400" })

function NavBar() {
    return ( 
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="w-full">
                <div className="flex h-14 justify-between items-center border-b border-zinc-200">
                    <Link className="flex items-center z-40 justify-center text-2xl" href="/">
                        <span className={`sm: px-8 ${pattaya.className}`}>note.it</span>
                    </Link>
                    <div className="hidden sm:flex justify-evenly">
                        <Link className={`${buttonVariants({
                            variant: "ghost"
                        })}`} href="/pricing">Pricing</Link>
                        <Link className={`${buttonVariants({
                            variant: "ghost"
                        })}`} href="/login">Login</Link>
                        <div className="ml-4 mr-8 my-auto">
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </div>

                    {/* todo: add mobile navBar */}
                </div>
            </div>
        </nav> 
    );
}

export default NavBar;