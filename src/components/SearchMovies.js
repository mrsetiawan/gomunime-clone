import React from 'react';
import { Input } from 'antd';

const SearchMovies = () => {

  const { Search } = Input;

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 300 }}
      />
    </div>
  )
}

export default SearchMovies;
