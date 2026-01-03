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
     //google-login
     export const googleLoginApi=async(reqBody)=>{
        return await commonApi("POST",`${SERVERURL}/google-login`,reqBody)//for register , no header needed.
     }

    //home page books api - to fetch all uploaded bpoks from books collection, calld by home component of users
    export const getBooksUploadedByUsers = async()=>{
      return await commonApi("GET",`${SERVERURL}/home-books`)
    }
    //all books api - to fetch all uploaded books for a logged in user, called by all products component, that when after logging in , a uswer clicks Books link from header of home page , header to pass token of logged in user and this must load as soon as user reached allproducts page with search bar
    export const getAllBooksApi = async(reqHeader)=>{
      return await commonApi("GET",`${SERVERURL}/all-books`,{},reqHeader)
    }

//authorized user api -user
    //view all books
    //view single books

    //upload book - this needs reqHeader because data type and authorisation is guven through headers, called by profile component.   --This is an authorized user API call---
    export const addBookApi=async(reqBody,reqHeader)=>{
      return await commonApi("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
    }
    
    //profile update

    //purchased book
    //approved book


//authorized user api -admin
    //add career
    //update admin
    //list books
    //list users
    //approve books
