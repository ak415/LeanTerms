export const CreateUser=(user)=>(
    $.ajax({
        method: "POST",
        url: "/api/signup",
        data: user
    })
);


export const LoginUser=(user)=>(
    $.ajax({
        method: "POST",
        url: "/api/login",
        data: user
    })
);


export const Logout=()=>(
    $.ajax({
        url: "/api/logout"
    })

);



export const CurrentUser= () =>(
    $.ajax({
        url: "/api/current_user"
    })

);