import commonApi from "./commonAPI"
import SERVERURL from "./ServerURL"
//guest api

//unauthoized userr: admin or other wise no need to login to see all jobs uploaded by admin, so no body and heder. serach kley and search for search feature
export const seeAllJobsByNotLoggedInuser= async(searchkey)=>{
  return await commonApi("GET",`${SERVERURL}/all-jobs?search=${searchkey}`)
}
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

    // HOME PAGE API - home page books api - to fetch all uploaded bpoks from books collection, calld by home component of users
    export const getBooksUploadedByUsers = async()=>{
      return await commonApi("GET",`${SERVERURL}/home-books`)
    }
    

//authorized user api -user

//upload book - this needs reqHeader because data type and authorisation is guven through headers, called by profile component.   --This is an authorized user API call---
    export const addBookApi=async(reqBody,reqHeader)=>{
      return await commonApi("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
    }
    
//  all books api - to fetch all uploaded books for a logged in user, called by all products component, that when after logging in , a uswer clicks Books link from header of home page , header to pass token of logged in user and this must load as soon as user reached allproducts page with search bar
    export const getAllBooksApi = async(search,reqHeader)=>{
         //search is a key which holds value of search variable same as is in argument
      return await commonApi("GET",`${SERVERURL}/all-books?search=${search}`,{},reqHeader)
    }
    //view single books - bookId is an argument and not body , reqHeader is needed, because only logged in users can see books that they have not uploaded and then only can view a single book.Nobody buys a book that thye have sold, commonApi has a structure httpmenthod, url, reqbody, reqheader . This Api call is made by Viewbook Component.
    export const getASingleBookApi = async(bookId,reqHeader)=>{
         return await commonApi("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
    }

    //Get all user upload books - bookstatus whether approved or not by admin, reqheader beacuse it is based on logged in user, called by profile
    export const getAllUserUploadBooksApi = async(reqHeader)=>{
      return await commonApi("GET",`${SERVERURL}/user-books`,{},reqHeader)
    }

    //Get all user bought books - purchase history of books bought by the user, reqheader beacuse it is based on logged in user, called by profile
    export const getAllUserPurchasedBooksAPI = async(reqHeader)=>{
      return await commonApi("GET",`${SERVERURL}/user-bought-books`,{},reqHeader)
    }

    //removed books uploaded by user, if they wish to do so, called by profile
   export const removeUserUploadBookApi = async(bookId,reqHeader)=>{
      return await commonApi("DELETE",`${SERVERURL}/user-books/${bookId}/remove`,{},reqHeader)
    }

    // logged In user profile update
    export const loggedInUserProfileUpdateApi=async(reqBody ,reqHeader)=>{
      return await commonApi("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
    }

    //logged in user to apply for a job , called by career component of users
    export const userApplyJobApi=async(reqBody,reqHeader)=>{
      return await commonApi("POST",`${SERVERURL}/user-application/add`,reqBody,reqHeader)

    }
    

    //purchased book
    //approved book


//authorized user api -admin
    //add career
    //update admin
    
    //list users : token of the admin is sent - called by Resourceadmin component
    export const getAllUsersListApi=async(reqHeader)=>{
     return await commonApi("GET",`${SERVERURL}/all-users`,{},reqHeader)
    }

    //list books : reqHeader is neede here, because it is admin authorized feature
    export const getAllBooksListForAdminApi = async(reqHeader)=>{
      return await commonApi("GET",`${SERVERURL}/all-books-admin`,{},reqHeader)
    }
    //approve books by admin , calleed by resourceadmin page when admin clicks approve button.
    export const updateBookByAdminApi = async(reqBody,reqHeader)=>{
      return await commonApi("PUT",`${SERVERURL}/admin/book/approve`,reqBody,reqHeader)
    }

    //update admin profile
    export const updateAdminProfileApi = async(reqBody,reqHeader)=>{
      return await commonApi("PUT" , `${SERVERURL}/admin-edit/profile`,reqBody,reqHeader)
    }

    //add job api BY admin
    export const addJobByAdminAPI = async(reqBody,reqHeader)=>{
       return await commonApi("POST",`${SERVERURL}/admin-add-job`,reqBody,reqHeader)
    }

    //users might have applied to various jobs, admin must see who all have applied in applications, called by admin Career component
    export const getAllUserApplicationsAPI = async(reqHeader)=>{
      return await commonApi("GET",`${SERVERURL}/all-applications/admin`,{},reqHeader)
    }

    //remove added job api
    export const removeJobByAdminAPI = async(jobID,reqHeader)=>{
       return await commonApi("DELETE",`${SERVERURL}/job/${jobID}/remove`,{},reqHeader)
    }
