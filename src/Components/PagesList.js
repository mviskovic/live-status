import React from 'react';
import axios from 'axios';


export default class PagesList extends React.Component{
    state = {
        pages: [],
    };

componentDidMount() {
    axios.get('http://104.251.212.69:4567/status').then((res)=>{
        console.log(res);
        console.log(res.data.status)
        this.setState({pages: res.data}).catch(error=>{alert(error); console.log(error)})
    });
}

render() {
    return (
      <ul>
        { this.state.pages.map(status => <li>{status.status}</li>)}
      </ul>
    )
  }
}