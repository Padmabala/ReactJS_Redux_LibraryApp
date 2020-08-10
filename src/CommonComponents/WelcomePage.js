import React,{Component} from 'react'
import comics from '../assets/images/Homepage/comics.gif'
import factual from '../assets/images/Homepage/factual.gif'
import funny from '../assets/images/Homepage/funny.gif'
import intellectual from '../assets/images/Homepage/intellectual.gif'
import rackOfBooks from '../assets/images/Homepage/rackOfBooks.gif'
import '../App.css';
class WelcomePage extends Component{
    render(){
        return(
            <div>
                <div className="home">
                     <header className="App-header">
            Books Books Everywhere !
              <div className="row">
                <div className="column">
                  <img src={comics} className="App-logo" alt="comics" />
                  <img src={factual} className="App-logo" alt="fiction" />
                  <img src={rackOfBooks} className="App-logo" alt="Rack of Books" />
                </div>
                <div className="column">
                  <img src={funny} className="App-logo" alt="funny" />
                  <img src={intellectual} className="App-logo" alt="Intellectual" />
                </div>
              </div>
          </header>        
          </div>
            </div>
        );
    }
}
export default WelcomePage;