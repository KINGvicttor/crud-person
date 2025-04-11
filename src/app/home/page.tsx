"use client"

import { Home } from "@/components/Home";
import { SideBar } from "@/components/SideBar";

const Page = () => {
    return (
        <div className="w-screen h-screen flex">
            <SideBar />
            <Home />
        </div>
    )
}

export default Page;