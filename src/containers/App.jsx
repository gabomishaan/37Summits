import React, {Component} from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {volcanoes} from "./volcanoes"
import latinize from 'latinize';
import Navigation from '../components/Navigation/Navigation'
import Sort from '../components/Sort'
import ClimbedList from '../components/ClimbedList/ClimbedList';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollText from '../components/ScrollText';


import NavigationES from '../components/components_ES/NavigationES/NavigationES'
import SortES from '../components/components_ES/SortES'
import ClimbedListES from '../components/components_ES/ClimbedListES/ClimbedListES';
import CardListES from '../components/components_ES/CardListES';
import SearchBoxES from '../components/components_ES/SearchBoxES';





class App extends Component {
	constructor () {
		super()
		this.state = {
			volcanoes: volcanoes,
			searchfield: '',
			climbedVolcanoes: [],
			route: 'home',
			InHomepage: true,
			sort: 'notClimbed',
			language: 'english',
			IsEnglish: false,
		};
	}

	

	onSearchChange = (event) => {
		this.setState({searchfield: latinize(event.target.value)});
	};

	markedAsClimbed = (id) => { 
		const index = volcanoes.findIndex(x => x.num === id);
		volcanoes[index].status=true;
		this.setState({volcanoes: volcanoes});
	};

	unmarkedAsClimbed = (id) => {
	const index = volcanoes.findIndex(x => x.num === id);
	volcanoes[index].status=false;
	this.setState({volcanoes: volcanoes});
	};

  	onRouteChange = (route) => {
      	this.setState({route: route});
      	if(route !== 'home'){
      		this.setState({InHomepage: false})
      	}
      	if(route === 'home'){
      		this.setState({InHomepage: true})
      	}
  	};

  	sortByElevation= () => {
  		volcanoes.sort((a, b) => b.elevation_number - a.elevation_number);
  		this.setState({volcanoes: volcanoes});
  	}

  	sortByName= () => {
  		volcanoes.sort((a, b) => a.num - b.num);
  		this.setState({volcanoes: volcanoes});
  		console.log('fuck')
  	}

  	onLanguageChange = (input) => {
      	this.setState({language: input});
      	if(input !== 'english'){
      		this.setState({IsEnglish: false})
      	}
      	if(input === 'english'){
      		this.setState({IsEnglish: true})
      	}
    }





	render() {
		const {InHomepage}=this.state;
		const {IsEnglish}=this.state;
		const filteredVolcanoes = this.state.volcanoes.filter(volcanoes => {
			return latinize(volcanoes.name).toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return(
	<div className='App Homepage'>

{this.state.language === 'english'
?(
<Navigation onLanguageChange={this.onLanguageChange}  onRouteChange={this.onRouteChange} volcanoes={filteredVolcanoes} InHomepage={InHomepage} IsEnglish={IsEnglish}/>
):(
<NavigationES onLanguageChange={this.onLanguageChange}  onRouteChange={this.onRouteChange} volcanoes={filteredVolcanoes} InHomepage={InHomepage} IsEnglish={IsEnglish}/>	
)}


{this.state.language === 'english'
?(

	

		this.state.route === 'home'
		? 

		 <div className='tc Homepage'>
			
			<h1 className='title'>🌋37 SUMMITS🌋</h1>


			<p className='description'>Join the challenge and reach the summit of Guatemala's 37 volcanoes</p>

			<div>
			<SearchBox searchChange={this.onSearchChange}/><Sort sortByName={this.sortByName} sortByElevation={this.sortByElevation}/>
			</div>
			
			<Scroll>
			<ErrorBoundry>
			<CardList sort={this.sort} volcanoes={filteredVolcanoes} markedAsClimbed={this.markedAsClimbed} unmarkedAsClimbed={this.unmarkedAsClimbed}/>
			</ErrorBoundry>
			</Scroll>
		 </div>
	
		:(
			this.state.route === 'about'
			? <div className='tc Homepage'>
			<h1 className='subtitle'>  About </h1>
			<ScrollText>
			<h3 className='aboutText'>Join the challenge to reach the summit of all of the 37 volcanoes in Guatemala! <br/> The 37 Summits challenge began as a way to bring nature enthusiasts together and to promote Guatemala's natural beauty. <br/> The challenge is typically comlpeted over a period of 2 years, at a pace of approximately one volcano per month. <br/> Famously completed in just 8 days, 11 hours and 30 minutes by experienced mountaineers Juan Carlos Sagastume and Willie Benegas, <br/> the 37 Summits challenge has inspired professionals and novices alike. </h3>
			<h3>Whether you are an avid hiker, looking to break records, or simply want to spend more time exploring nature; use this portal to keep track of your progress!</h3>
			</ScrollText>
			</div>
			:(
			<div className='tc'>
			<ScrollText className=''>
			<ClimbedList volcanoes={filteredVolcanoes} unmarkedAsClimbed={this.unmarkedAsClimbed} />
			</ScrollText>
			</div>)

			)
		

):(

this.state.route === 'home'
		? 

		 <div className='tc Homepage'>
			
			<h1 className='title espanol'>🌋37 CUMBRES🌋</h1>


			<p className='description'>Únete al desafío y alcanza la cumbre de los 37 volcanes de Guatemala</p>

			<div>
			<SearchBoxES searchChange={this.onSearchChange}/><SortES sortByName={this.sortByName} sortByElevation={this.sortByElevation}/>
			</div>
			
			<Scroll>
			<ErrorBoundry>
			<CardListES sort={this.sort} volcanoes={filteredVolcanoes} markedAsClimbed={this.markedAsClimbed} unmarkedAsClimbed={this.unmarkedAsClimbed}/>
			</ErrorBoundry>
			</Scroll>
		 </div>
	
		:(
			this.state.route === 'about'
			? <div className='tc Homepage'>
			<h1 className='subtitle'>  Información </h1>
			<ScrollText>
			<h3 className='aboutText'>¡Únete al desafío de llegar a la cima de los 37 volcanes de Guatemala! <br/> El reto 37 Cumbres comenzó como una manera de unir a los amantes de la naturaleza y promover la belleza natural de Guatemala. <br/> El desafío generalmente se completa en un período de 2 años, a un ritmo aproximado de un volcán por mes. <br/> Célebremente completado en solo 8 días, 11 horas y 30 minutos por los alpinistas consumados Juan Carlos Sagastume y Willie Benegas, <br/> el desafío de las 37 Cumbres ha inspirado a profesionales y principiantes por igual. </h3>
			<h3>Ya seas un ávido senderista, buscas batir récords o simplemente quieres pasar más tiempo explorando la naturaleza, <br/> ¡utiliza este portal para mantener un record de tu progreso!</h3>
			</ScrollText>
			</div>
			:(
			<div className='tc'>
			<ScrollText className=''>
			<ClimbedListES volcanoes={filteredVolcanoes} unmarkedAsClimbed={this.unmarkedAsClimbed} />
			</ScrollText>
			</div>)

			)

)


}



	</div>
	);
	}
}

export default App;
