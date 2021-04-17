export const All_Products = () => {
  return fetch("http://localhost:5000/products").then((response) => response.json());
};

export const signInRequest = (userName, password)=>{
return fetch( "http://localhost:5000/login",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            userName,
            password
        }),
    }).then((response) => response.json())
};
export const signUpRequest = (userName, password,email,firstName,lastName)=>{
    return fetch( "http://localhost:5000/users",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                userName,
                password,
                email,
                firstName,
                lastName
            }),
        }).then((response) => response.json())
    };

