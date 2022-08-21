import React from "react";


function SearchBar({ placeholder, data }) {
    return (
        <div ClassName="search">
            <div ClassName="searchinput">
                <input name="Input" type="text" placeholder={placeholder} />
                <div ClassName="searchIcon"></div>
            </div>
            <div ClassName="dataresult"></div>
        </div>
    );
}

export default SearchBar;