/*
React Context API
We provided some simple React template code. Your goal is to modify the application so that when you click the toggle 
button, the favorite programming language toggles between the items in the languages array. The default value should be 
the first item in the array.

You must use the Context API for this challenge, which means you have to use the React.createContext and Context.Provider 
functions. You are free to add classes and styles, but make sure you leave the element ID's as they are. 
*/

import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [lang, setLang] = useState('JavaScript')

  return (
    <AppContext.Provider value={{lang, setLang}}>
      {children}
    </AppContext.Provider>
  )
}

function App() {
  // implement Context here so can be used in child components
  return (
    <AppProvider>
      <MainSection />
    </AppProvider>
  );
}

function MainSection() {
  const {lang, setLang} = useContext(AppContext)

  const toggleButton = (e) => {
    e.preventDefault()

    if(lang === languages[0]) {
      //console.log('Its Javascript, so we changed to Python')
      setLang(languages[1])
    } else {
      //console.log('Its Python, so we changed to JavaScript')
      setLang(languages[0])
    }
  }
  return (
    <div>
      <p id="favoriteLanguage">Favorite programing language: {lang}</p>
      <button id="changeFavorite" onClick={toggleButton}>Toggle language</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);