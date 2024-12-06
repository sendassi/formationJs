import React, { useState, useEffect } from 'react';



function UserList() {

  const [users, setUsers] = useState([]);



  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())

      .then(data => setUsers(data))

      .catch(error => console.error('Erreur:', error));

  }, []); // Exécution unique lors du montage



  return (

    <div>

      <h3>Liste des utilisateurs</h3>

      <ul>

        {users.map(user => (

          <li key={user.id}>{user.name}</li>

        ))}

      </ul>

    </div>

  );

}



export default UserList;