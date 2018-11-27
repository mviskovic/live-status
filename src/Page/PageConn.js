import React from 'react';
import axios from 'axios';


export default class pageConn extends React.Component{
state={
    pages: '',
};

componentDidMount() {
    axios.get('http://104.251.212.69:4567/status').then(res=>{
        console.log(res);
        this.setState({pages: res.data}).catch(error=>{console.log(error)})
    });
}

render() {
    return(
        <ul>
            {this.state.pages.map(page =><li>{page.status}</li>)}
        </ul>
    )
    
}
}