export const CreateUser=(user)=>(
     $.ajax({
        method: "POST",
        url: "/api/signup",
        data: user
    })
);


export const LoginUser=(user)=>{
   debugger;    
    console.log(user);
    let promise =$.ajax({
        method: "POST",
        url: "/api/login",
        data: user
    });
    return promise;
};


export const Logout=()=>(
    $.ajax({
        url: "/api/logout"
    })
);



export const CurrentUser= () =>{
   return $.ajax({
        url: "/api/current_user"
    });
};