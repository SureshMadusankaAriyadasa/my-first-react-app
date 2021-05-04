import React from 'react';
import Album from './Album';

class Albums extends React.Component{
    state={
        albums:null
    }

    async componentDidMount(){
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const albums = await resp.json()
        this.setState({albums})
    }

    render(){
        const {albums} = this.state
        return(
            <div style={{width:'60%',display:'flex',flexDirection:'column',padding:'0 10px'}}>
                {
                    albums &&
                    albums.map(({...a}) =><Album key={a.id} {...a}/>)
                }
            </div>
        )
    }
}

export default Albums;