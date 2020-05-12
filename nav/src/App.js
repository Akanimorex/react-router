import React from 'react';
import './App.css';
import Navigation from './Navigation';
import About from './About';
import Port from './Port';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
	<Router>
		<div className="App">

			<Navigation/>
			
				<Switch>
					
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/portifolio' component={Port} />
					<Route path='/contact' component={Contact} />
				</Switch>

				  
		
		
		</div>
	</Router>

  );
}


const Home =()=>{
	return(
		<div>
			
		</div>
	)
}


export default App;




