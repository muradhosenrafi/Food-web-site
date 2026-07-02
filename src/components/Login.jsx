import { useState } from "react";
import { FaCheckCircle, FaLock, FaUser } from "react-icons/fa"
import { iconClass, inputBase } from "../assets/dummydata";
import { MdRememberMe } from "react-icons/md";




const Login = ({handleLoginSuccess,onClose}) => {
  const [showToast,setShowToast]=(false)
  const [shawPassword,setShawPassword]=useState (false)
  const [FormData,setFromData]= useState({username:"", password: "",MdRememberMe:false })

  return (
<div className="space-y-6 relative">
  <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${showToast?
    'translate-y-0 opacity-100':
    '-translate-y-20 opacity-0'}`}>
   <div className="bg-green-600 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2 text-sm">
      <FaCheckCircle className="shrink-0"/>
      <span>
        Login Successfull !
      </span>
   </div>
  </div>
<form onSubmit={handleSubmit} className="space-y-6">
  <div className="relative">
     <FaUser className={iconClass}/>
     <input type={text} name='username' placeholder="Username" value={FormData.username}
     onChange={handleChange} className={`${inputBase} pl-10 pr-4 py-3`}
     />
  </div>

   <div className="relative">
     <FaLock className={iconClass}/>
     <input type={shawPassword ?'text':"password"} name="password" placeholder="password" value={FormData.password}
     onChange={handleChange} className={`${inputBase} pl-10 pr-4 py-3`}
     />
  </div>
</form>
</div>
  )
}

export default Login