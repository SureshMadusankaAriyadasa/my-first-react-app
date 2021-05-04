import React from 'react';
import { withRouter} from 'react-router-dom';
const Album = ({title,userId,history}) =>{
    const handleClick = () =>{
        history.push(`/${userId}/albums`,{
            userId,
            title,
        })
    }
    return(
        <div style={{padding:'5px 0'}}>
            <div style={{fontSize:'1.5rem',width:'min-content',cursor:'pointer'}} onClick={handleClick}>{title}</div>
            {/* <div style={{fontSize:'0.8rem',color:'silver'}}>{name}</div> */}
        </div>
    )
}

export default  Album;