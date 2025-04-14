"use client"

import { SideBar } from "@/components/SideBar";
import { StudentList } from "@/components/StudentList";

const Page = () => {
    return (
        <div className="w-screen h-screen flex">
            <SideBar />
            <StudentList />
        </div>
    )
}

export default Page;