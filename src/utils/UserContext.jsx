import { createContext } from "react"
const UserContext =  createContext({
    user:{
        name:"ahmedThousif",
        email:"ahmedthousif@gmail.com"
    }
})

export default UserContext