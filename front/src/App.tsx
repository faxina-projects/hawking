import React, { useState } from 'react';
import { SearchBox, ZipList } from './components';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

type Record = {
  id: string;
  state: string;
  city: string;
};

type ResponseData = {
  data: Record[];
};

function App() {
  const [queryText, setQueryText] = useState('');
  const [zips, setZips] = useState<Record[]>([]);
  useEffect(() => {
    axios
      .get<ResponseData>(`http://localhost:3001/search?text=${queryText}`)
      .then((result) => {
        console.log(result);
        const { data } = result.data;
        const tempZips = data.map((record) => {
          return { id: record.id, city: record.city, state: record.state };
        });
        setZips(tempZips);
      });
  }, [queryText, setZips]);
  return (
    <div className="App">
      <SearchBox placeholder="Search Elasticsearch" onChange={setQueryText} />
      <ZipList zips={zips} />
    </div>
  );
}
export default App;
