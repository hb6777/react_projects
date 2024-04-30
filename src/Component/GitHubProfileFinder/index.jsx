import { useEffect, useState } from "react";
import UserCard from "./userCard";
import "./styles.css"

export default function GitHubProfileFinder(){

    /* Use GitHub API: "https://api.github.com/users/{username}" */

        const [username, setUsername] = useState('hb6777');
        const [loading, setLoading] = useState(false);
        const [errorMsg, setErrorMsg] = useState('');
        const [userInfo, setUserInfo] = useState(null);

        function handleSearch(){ 
            fetchGitHubAPI(); 
        }
    
        async function fetchGitHubAPI()
        {
            try{ 
                setLoading(true)

                const resp = await fetch(`https://api.github.com/users/${username}`);
                const data = await resp.json();
     
                if (data) {
                   //   console.log(data);
                    setUserInfo(data)
                    setLoading(false)
                }

            }catch(e){
                setLoading(false)
                setErrorMsg(e.message)
            } 
        }
 
        useEffect(()=> {
            fetchGitHubAPI()
        },[username])

if(loading){
    return(<h1>Searching ... Please wait.</h1>);
}

if(errorMsg != ''){
    return(<h1>Error Occured! {errorMsg}</h1>);
}
        return(<div className="github-wrapper">
                <div>
                    <input 
                        type="text"
                        name="search-user-name"
                        placeholder="Enter Github username here ..."
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <button  className="github-search-btn" onClick={handleSearch}>Search User</button>  
                </div>  
                {
                    userInfo ? <UserCard user={userInfo}/>: null
                }       
        </div>);


}

