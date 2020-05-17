import React, { useState, useEffect } from 'react';

export default function Appp() {

  const [repositories, setRepositories] = useState([]);

  useEffect( async () => {
    const response = await fetch('https://api.github.com/users/diego3g/repos');
    const data = await response.json();
      setRepositories(data)
  },[])

  return ( 
     
     <ul>
       { repositories.map( repo => (
          <li key={repo.id}>{repo.name}</li>
          ))}
     </ul>

   );
 

}


