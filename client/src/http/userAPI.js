import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { Context } from "..";

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password });
    localStorage.setItem('token', data.token);
    const decodedToken = jwtDecode(data.token);
    const id = decodedToken.id;
    localStorage.setItem('userId', id); // сохраняем id в localStorage
    console.log(id);
    return jwtDecode(data.token);
}


export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    
    const decodedToken = jwtDecode(data.token);
    const id = decodedToken.id;
    const role = decodedToken.role;
    localStorage.setItem('userId', id); // сохраняем id в localStorage
    console.log(id);
    localStorage.setItem('userrole', role); 
    console.log(role);
   
    return jwtDecode(data.token);
}

  
export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);    
    return { user: jwtDecode(data.token) };
}
