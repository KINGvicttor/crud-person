"use client"

import { SideBar } from "@/components/SideBar"
import { UserList } from "@/components/UserList"

const Page = () => {
    return(
        <div className="w-screen h-screen flex">
            <SideBar />
            <UserList />
        </div>
    )
}

export default Page;