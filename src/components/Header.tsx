import returnIcon from "../assets/img/return-icon.png"
import notificationIcon from "../assets/img/notification-icon.png"

export const Header = () => {
    return(
        <div className="w-[calc(100vw-270px)] h-[60px] flex justify-between bg-primary-blue ">
            <div className="w-[800px] flex items-center">
                <a href="/home"><img className="w-[20px] h-[20px] ml-10" src={returnIcon.src} /></a>
            </div>
            <div className="w-[300px] flex items-center">
                <input 
                    className="px-3 py-1 mr-2 border-2 border-secondary-white rounded-lg placeholder:text-sm placeholder:text-secondary-white"
                    type="text" 
                    name=""
                    placeholder="Search"/>
                <img className="w-[20px] h-[20px]" src={notificationIcon.src}/>
            </div>
        </div>
    )
}