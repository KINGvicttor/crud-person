import { Header } from "./Header"
import courseIcon from "../assets/img/course-icon.png"
import studentIcon from "../assets/img/student-icon.png"
import paymentIcon from "../assets/img/payment-icon.png"
import reportIcon from "../assets/img/report-icon.png"


export const Home = () => {
    return (
        <div className="w-[calc(100vw-270px)] flex flex-col items-center h-screen bg-primary-blue">
            <Header />
            <div className="h-[calc(100vh-60px)] container mx-auto flex justify-between p-10">
                <div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-secondary-blue shadow-lg">
                    <div className="p-5">
                        <img className="w-[48px] h-[38px]" src={courseIcon.src} />
                        <p className="text-lg mt-2">Courses</p>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-2xl font-bold p-5 mr-5">999</p>
                    </div>
                </div>
                <div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-secondary-blue shadow-lg">
                    <a href="/studentList">
                        <div className="p-5">
                            <img className="w-[48px] h-[38px]" src={studentIcon.src} />
                            <p className="text-lg mt-2">Students</p>
                        </div>
                    </a>
                    <div className="flex justify-end">
                        <p className="text-2xl font-bold p-5 mr-5">999</p>
                    </div>
                </div><div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-secondary-blue shadow-lg">
                    <div className="p-5">
                        <img className="w-[48px] h-[38px]" src={paymentIcon.src} />
                        <p className="text-lg mt-2">Payments</p>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-2xl font-bold p-5 mr-5">999</p>
                    </div>
                </div><div className="w-[300px] h-[180px] cursor-pointer rounded-lg bg-secondary-blue shadow-lg">
                    <div className="p-5">
                        <img className="w-[48px] h-[38px]" src={reportIcon.src} />
                        <p className="text-lg mt-2">Reports</p>
                    </div>
                    <div className="flex justify-end">
                        <p className="text-2xl font-bold p-5 mr-5">999</p>
                    </div>
                </div>
            </div>
        </div>
    )
}