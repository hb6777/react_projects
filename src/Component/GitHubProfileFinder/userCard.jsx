import { MdFrontHand } from "react-icons/md";
import "./styles.css"


export default function UserCard({user}){ 

    const {avatar_url, url, name, login, html_url,followers,created_at } = user;
    const CreatedDate = new Date(created_at);
    const formatDate = CreatedDate.getDate() + ' ' + CreatedDate.toLocaleString('en-us',{month:"short"}) + ' ' + CreatedDate.getFullYear(); 

    console.log('Date: ' + formatDate);

    return ( 
        <div className="card-container">
            <h1>{name}</h1>
            <div>
                <img className="user-card-image" src={avatar_url} alt={name} />
            </div>
            <div className="user-card-link">
                <a href={`https://github.com/${login}`} target="_blank">{ login || name }</a>
                <span style={{padding:'20px'}}>User Joined on: {formatDate}</span>
            </div>
            <div className="user-card-follower">
                <span>Followers: {followers}</span>
            </div>
        </div> 
    );
}
