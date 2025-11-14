import commonApi from "./commonAPI"
import SERVERURL from "./ServerURL"
//guest api
//register api - called by Auth component when register button is clicked
     export const registerApi=async(reqBody)=>{
        return await commonApi("POST",`${SERVERURL}/register`,reqBody)//for register , no header needed.
     }
   
     //login api
     export const loginApi=async(reqBody)=>{
        return await commonApi("POST",`${SERVERURL}/login`,reqBody)//for register , no header needed.
     }
    //home page books api
    //all books api

//authorized user api -user
    //view all books
    //view single books
    //upload book
    //profile update
    //purchased book
    //approved book


//authorized user api -admin
    //add career
    //update admin
    //list books
    //list users
    //approve books
