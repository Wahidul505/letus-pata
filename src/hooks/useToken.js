import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    if(email){
        fetch('http://localhost:5000/access', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({email : email})
    }).then(res => res.json()).then(data => {
        setToken(data.token)
        localStorage.setItem('token', JSON.stringify(data.token))
    })
    };

    return [token];
}

export default useToken;