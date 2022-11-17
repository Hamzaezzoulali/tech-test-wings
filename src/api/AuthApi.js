import { getItem, removeItem ,addItem} from "../services/LocalStorage";




export function asAuth() {
   const token = getItem("LoginToken")
//    alert(token)
    if(token!=null) 
    {
        return true
    }else {
        return false
    }
    
}



export function  login(AuthData) {
    console.log(AuthData.email + AuthData.password )
    if(AuthData.email == "admin@test.com" && AuthData.password == "1234AZER"){
        const token =  Generate_Token()
        addItem("LoginToken",token)
        addItem("LoginEmail",AuthData.email)
        addItem("LoginPassword",AuthData.password)
        console.log("logedd !!!")
        return true
    }
    return false
    
}

export function logout() {
    removeItem("LoginToken")
}
function Generate_Token() {
    // generates uuid.
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
    }