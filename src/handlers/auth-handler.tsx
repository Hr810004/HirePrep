import Loaderpage from "@/routes/Loaderpage"
import { useAuth, useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AuthHandler = () => {
   const {isSignedIn} = useAuth()
   const { user } = useUser()
   const pathname = useLocation().pathname
   const navigate = useNavigate()
   const [loading, setloading] = useState()

   useEffect(() => {
   },[user,isSignedIn,navigate,pathname])
   
   if (loading) {
      return <Loaderpage/>
   }
   return null
}

export default AuthHandler