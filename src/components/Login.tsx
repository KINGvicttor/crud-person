import { Logo } from "./Logo"

export const Login = () => {
    return (
        <div className="w-[475px] h-[550px] flex flex-col justify-center items-center rounded-lg text-black bg-white shadow-lg">
            <Logo label={'CRUD PERSON'} modeData={"dark"}/>
            <p className="text-lg font-bold mt-6">SIGN IN</p>
            <p className="text-sm text-gray-400 mb-6">Enter your credentials to access your account</p>
            <form className="flex flex-col w-[415px]" action="">
                <label>User</label>
                <input
                    className="w-[415px] h-[44px] border border-gray-300 outline-0 px-3 rounded-lg placeholder:text-sm placeholder:text-gray-400"
                    placeholder="Enter your user"
                    type="text"
                    name="" />
                <label className="mt-2">Password</label>
                <input
                    className="w-[415px] h-[44px] border border-gray-300 outline-0 px-3 rounded-lg placeholder:text-sm placeholder:text-gray-400"
                    placeholder="Enter your password"
                    type="password"
                    name=""
                    id="" />
                <button
                    className="w-[415px] h-[44px] mt-4 rounded-lg cursor-pointer bg-primary-blue text-white"
                    onClick={() => { }}>SIGN IN</button>
            </form>
            <p className="mr-2 mt-4 text-sm text-gray-400">Forgot your password? <a className="text-primary-blue underline" href="">Reset your password</a></p>
        </div>
    )
} 