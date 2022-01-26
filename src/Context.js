import  { createContext } from "react"
const defaultValue = {
 }
 const myContext = createContext(defaultValue)

export const {Provider} = myContext
export default myContext
