import React from 'react'
import SearchBar from './components/Searchbar/Searchbar';
import MockData from './MockData.json'
function App() {
  return (
    <>
    <SearchBar placeholder={'Search Term...'} data={MockData}/>
    </>
  );
}

export default App;
