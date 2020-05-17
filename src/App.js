import React, { useState, useEffect } from 'react';

// exporting in function form
export default function App() {

// setting the State using Hooks useState
  const [repositories, setRepositories] = useState([]);


// Using Hooks useEffect to define state conditions
  useEffect( async () => {
    const response = await fetch('https://api.github.com/users/BernardomAmaral/repos');
    const data = await response.json();
      setRepositories(data)
  },[]);
//Implementing a visual return to the favorites lenght
  useEffect(() => {
    const filterFavorites = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filterFavorites.length} favoritos`
  }, [repositories])


//Favorite function
  function handleFavorite(id){
    const newRepositories = repositories.map( repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite } : repo
    });

    setRepositories(newRepositories);
  }

  return ( 
     
     <ul>
       { repositories.map( repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span> }
            <button onClick={ () => handleFavorite(repo.id) }>
              Favoritar
            </button>
          </li>
          ))}
     </ul>

   );
 

}


