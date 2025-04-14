import { Logo } from "./Logo"
import avatarIcon from "../assets/img/avatar-icon.jpg"
import homeIcon from "../assets/img/home-icon.png"
import courseIcon from "../assets/img/course-icon.png"
import studentIcon from "../assets/img/student-icon.png"
import paymentIcon from "../assets/img/payment-icon.png"
import reportIcon from "../assets/img/report-icon.png"
import settingIcon from "../assets/img/settings-icon.png"
import logoutIcon from "../assets/img/logout-icon.png"

export const SideBar = () => {
    return (
        <div className="w-[270px] h-screen flex flex-col items-center bg-primary-darkblue text-white">
            <Logo label={'CRUD PERSON'} modeData={'light'} />
            <div className="w-[130px] h-[196px] mt-10 flex flex-col items-center">
                <img className="w-[128px] h-[128px] mb-2 rounded-full" src={avatarIcon.src} />
                <h1 className="text-xl mb-2 font-bold">User name</h1>
                <p className="text-sm mb-2">Admin</p>
            </div>
            <div className="w-[193px] h-[497px] mt-10 flex flex-col items-center justify-between">
                <ul className="mt-10">
                    <a href=""><li className="mt-3 flex"><img className="w-[19px] h-[17px] mt-0.5 mr-2" src={homeIcon.src}/> Home</li></a>
                    <a href=""><li className="mt-3 flex"><img className="w-[19px] h-[17px] mt-0.5 mr-2" src={courseIcon.src}/> Courses</li></a>
                    <a href=""><li className="mt-3 flex"><img className="w-[19px] h-[17px] mt-0.5 mr-2" src={studentIcon.src}/> Students</li></a>
                    <a href=""><li className="mt-3 flex"><img className="w-[19px] h-[17px] mt-0.5 mr-2" src={paymentIcon.src}/> Payments</li></a>
                    <a href=""><li className="mt-3 flex"><img className="w-[19px] h-[17px] mt-0.5 mr-2" src={reportIcon.src}/> Reports</li></a>
                    <a href=""><li className="mt-3 flex"><img className="w-[19px] h-[17px] mt-0.5 mr-2" src={settingIcon.src}/> Settings</li></a>
                </ul>
                <a href="" className="flex">Log out <img className="w-[19px] h-[17px] mt-0.5 ml-2" src={logoutIcon.src}/></a>
            </div>
        </div>
    )
}