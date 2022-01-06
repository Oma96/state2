
import React from 'react'
import './Counter.js'
import Counter from './Counter.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class App extends React.Component{
  constructor(){
    super() 
  this.state={
   person:{
      fullName:"Oumaima Jarraya",
      bio:"Biologist interested in programming",
      imgSrc:<img src="/Photo.jpg" alt="myimage" />,
      },
    showState:false
     }
  }
  

  handleClick= () => {
    this.setState({
      showState: !this.state.showState
    }
    );
  }
  render() {
    console.log(this.state)
    return(

      <div className='App'>
        {this.state.showState && (
          <>
            <h1>{this.state.person.imgSrc}</h1>
            <h1>{this.state.person.fullName}</h1>
            <h1>{this.state.person.bio}</h1>
             <h1>{this.state.person.profession}</h1>
            <br></br>
           <Counter/>
           </>
          )}
        <Button variant="danger" onClick={this.handleClick}>Show</Button>
     </div>
    )
  }
}
export default App
