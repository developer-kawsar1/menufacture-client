import { useEffect, useState } from "react"

const useTokem=user=>{
    const [token,setToken]=useState('')
    useEffect(()=>{ 
        const email=user?.user?.email 
        const name=user?.user?.displayName 
        const currentUser={email:email,name:name} 
        if(email){
            fetch(`https://vast-plateau-65170.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data); 
                // const token=data.token;
                // setToken(token)
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
       console.log('email is '+email);
    },[user]) 
    return [token]
} 
export default useTokem