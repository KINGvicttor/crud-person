import { Header } from "./Header"
import courseIcon from "../assets/img/course-icon-black.png"
import studentIcon from "../assets/img/student-icon-black.png"
import paymentIcon from "../assets/img/payment-icon-black.png"
import reportIcon from "../assets/img/report-icon-black.png"


export const Home = () => {
    return (
        <div className="w-[calc(100vw-270px)] flex flex-col items-center h-screen bg-white">
            <Header />
            <div className="h-[calc(100vh-60px)] container mx-auto flex flex-col p-10 text-black">
                <div className="w-full h-[190px] flex justify-between items-center">
                    <a href="/courseList">
                        <div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-gray-200 shadow-lg">
                            <div className="p-5">
                                <img className="w-[50px] h-[50px]" src={courseIcon.src} />
                                <p className="text-lg mt-2">Courses</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-2xl font-bold p-5 mr-5">999</p>
                            </div>
                        </div>
                    </a>
                    <a href="/studentList">
                        <div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-gray-200 shadow-lg">
                            <div className="p-5">
                                <img className="w-[50px] h-[50px]" src={studentIcon.src} />
                                <p className="text-lg mt-2">Students</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-2xl font-bold p-5 mr-5">999</p>
                            </div>
                        </div>
                    </a>
                    <a href="/payment">
                        <div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-gray-200 shadow-lg">
                            <div className="p-5">
                                <img className="w-[50px] h-[50px]" src={paymentIcon.src} />
                                <p className="text-lg mt-2">Payments</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-2xl font-bold p-5 mr-5">999</p>
                            </div>
                        </div>
                    </a>
                    <a href="/report">
                        <div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-gray-200 shadow-lg">
                            <div className="p-5">
                                <img className="w-[50px] h-[50px]" src={reportIcon.src} />
                                <p className="text-lg mt-2">Reports</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-2xl font-bold p-5 mr-5">999</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="w-full h-[190px] mt-[100px] flex items-center justify-between">
                    <a href="/userList">
                        <div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-gray-200 shadow-lg">
                            <div className="p-5">
                                <img className="w-[50px] h-[50px]" src={reportIcon.src} />
                                <p className="text-lg mt-2">Users</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-2xl font-bold p-5 mr-5">999</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}