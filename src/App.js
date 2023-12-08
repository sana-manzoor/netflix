import './App.css';
import request from './request';
import Row1 from './components/Row1';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={request.fetchNetflixOriginals} />
      <Row1 title="Netflix Orginals" fetchUrl={request.fetchNetflixOriginals}/>
      <Row1 title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row1 title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row1 title="Action Movies" fetchUrl={request.fetchActionMovie}/>
      <Row1 title="Comedy Movies" fetchUrl={request.fetchComedyMovie}/>
      <Row1 title="Horror Movies" fetchUrl={request.fetchHorrorMovie}/>
      <Row1 title="Romantic Movies" fetchUrl={request.fetchRomanceMovie}/>
      <Row1 title="Documentaries" fetchUrl={request.fetchDocumentaryMovie}/>


    </div>
  );
}

export default App;
