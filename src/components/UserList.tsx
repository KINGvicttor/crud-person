import { Header } from "./Header"
import avatar from "../assets/img/student-list-icon.png"

export const UserList = () => {
    return (
        <div className="w-[calc(100vw-270px)] h-screen flex flex-col items-center bg-white">
            <Header />
            <div className="h-[calc(100vh-60px)] container mx-auto py-10">
                <div className="w-full h-[64px] flex justify-between items-center bg-gray-100 rounded-t-lg">
                    <div className="w-[386px] h-[32px] flex items-center justify-between">
                        <div className="w-[150px] h-[31px] flex items-center justify-around text-sm text-black">
                            <p className="ml-2">Show</p>
                            <select
                                className="p-1 rounded-lg text-white bg-black"
                                name="">
                                <option value="1">1</option>
                            </select>
                            <p>Entries</p>
                        </div>
                        <div className="w-[218px] h-[32px]">
                            <input
                                className="px-3 py-1 mr-2 border-2 border-black text-black rounded-lg placeholder:text-sm placeholder:text-black outline-0"
                                type="search"
                                name=""
                                placeholder="Search..." />
                        </div>
                    </div>
                    <div className="w-[139px] h-[32px] mr-2">
                        <button
                            className="w-full h-full bg-primary-blue p-1 rounded-lg cursor-pointer"
                            onClick={() => ('')}>+ Add user</button>
                    </div>
                </div>


                <table className="w-full text-black">
                    <thead className="w-full h-[49px] bg-gray-100 font-bold">
                        <tr className="w-full h-[64px]">
                            <td className="w-[120px] h-[17px] text-center">Tracking ID</td>
                            <td className="w-[120px] h-[17px] text-center">User</td>
                            <td className="w-[120px] h-[17px] text-center">Email</td>
                            <td className="w-[120px] h-[17px] text-center">Phone</td>
                            <td className="w-[120px] h-[17px] text-center">Date of admission</td>
                            <td className="w-[120px] h-[17px] text-center">Role</td>
                            <td className="w-[120px] h-[17px] text-center">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="w-full h-[64px]">
                            <td className="w-[120px] h-[17px] text-center">0</td>
                            <td className="w-[120px] h-[17px] text-center">
                                <div className="flex items-center justify-center">
                                    <img
                                        className="w-[32px] h-[32px] rounded-lg mr-3"
                                        src={avatar.src} />
                                    <p>Teste</p>
                                </div>
                            </td>
                            <td className="w-[120px] h-[17px] text-center">teste@teste.teste</td>
                            <td className="w-[120px] h-[17px] text-center">{'(99)999999999'}</td>
                            <td className="w-[120px] h-[17px] text-center">01/01/01</td>
                            <td className="w-[120px] h-[17px] text-center">Admin</td>
                            <td className="w-[120px] h-[17px] text-center">
                                <button onClick={() => ('')} className="bg-yellow-500 text-white rounded-lg cursor-pointer px-2 py-1 mr-2">Edit</button>
                                <button onClick={() => ('')} className="bg-red-500 text-white rounded-lg cursor-pointer px-2 py-1">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div className="w-full h-[63px] flex justify-center items-center text-black bg-gray-100 rounded-b-lg">
                    <div className="w-[223px] h-[31px] flex items-center justify-around">
                        <a href="">Previous</a>
                        <a href="" className="bg-primary-darkblue text-white px-2 py-1 rounded-lg">1</a>
                        <a href="" className="px-2 py-1 rounded-lg hover:bg-primary-darkblue hover:text-white">2</a>
                        <a href="" className="px-2 py-1 rounded-lg hover:bg-primary-darkblue hover:text-white">3</a>
                        <a href="" className="px-2 py-1 rounded-lg">Next</a>
                    </div>
                </div>
            </div>
        </div>
    )
}