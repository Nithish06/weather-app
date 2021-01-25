
import './App.css';
import Selectcity from './components/Selectcity';
import Fetch from './components/Fetch';
import {API_KEY, API_BASE_URL} from './api/mainconfig';
import List from './components/List';




const App = () => {
  const {data, error, isLoading, setUrl} = Fetch();
  const getContent = () => {
    if(error) return <h2>Error Cannot Fetch: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <List weathers={data.list} />
  };
  return (
    <div className="App">
      <Selectcity onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)}/>
      <div className='content'>
      {getContent()}
    </div>
    
    </div>
  );
}

export default App;
