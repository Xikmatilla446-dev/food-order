import React from 'react';
import {InputSearch} from "./input-search-styles";


const SearchInput = ({placeholder}) => {

    return (
        <InputSearch  className="search-input"  placeholder={placeholder} />
    )
};

export default SearchInput;
