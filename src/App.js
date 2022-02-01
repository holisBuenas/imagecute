
import { useEffect, useState } from 'react';
import './App.css';
import { fetchAndReturnData } from './app/funtionsApi';

import PrevImages from './components/PrevImages';
import { initialStatePreImages } from './app/initialState';
import BuscadorImagenesNuevas from './components/BuscadorImagenesNuevas';
import SiderBarFiltersOptions from './components/SiderBarFiltersOptions';

function App() {
  const API_KEY = '12556864-63ec1536bcc4749970b9ea6fd';
  const URLDefault = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + "red"
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + "red"
  const [urlQueryApi, setUrlQueryApi] = useState(URL);

  const [state, setState] = useState(initialStatePreImages);

  const [lenguage, setLenguage] = useState("es");
  const [typeImage, setTypeImage] = useState("all");
  const [filtros, setFiltros] = useState("");



  useEffect(() => {

    fetchAndReturnData(urlQueryApi, setState)

  }, [urlQueryApi]);



  return (
    <div className="App">

      <BuscadorImagenesNuevas
        urlQueryApi={urlQueryApi}
        setUrlQueryApi={setUrlQueryApi}
        setState={setState}
        filtros={filtros}
      />
      <div className='divisor'>
        <SiderBarFiltersOptions
          setFiltros={setFiltros}
          setTypeImage={setTypeImage}
          setLenguage={setLenguage}
          typeImage={typeImage}
          lenguage={lenguage}
          urlQueryApi={urlQueryApi}
        />
        <PrevImages
          state={state}
        />
      </div>

    </div>
  );
}

export default App;
