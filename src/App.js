import React,{useEffect,useState} from 'react';

import './App.css';
import axios from 'axios';
const Card =({user}) =>{
  return(     
    <div>
                <img style={{width:"100px",height:"100px"}}src="https://drive.google.com/uc?export=view&id=1aj_vT5zjJlkdEQ_VcCsdnvpVBi-Fjwyb" class="card-img-top" alt="..." />
                <div class="card-body" >
                  <>
                    <h2 >{user.name}</h2>
                    <p >{user.username}</p>
                    <p>{user.email}</p>
                    </>
                </div>
              
          
        

                </div>    
  )
}


function App() {
  const[lisOfUser,setlistOfUser]=useState([]);
  const[eroor,seteroor]=useState(null);
  useEffect(()=>
  {
    axios.get('https://jsonplaceholder.typicode.com/users?fbclid=IwAR2NTnuLGL-MH1FWlla_1QAvOXoIhcY7SceTbc1D4wLTiDzgHu3jmAIo87Q')
    .then(function(reponse){
      setlistOfUser(reponse.data)
    })
    .catch(function(error)
    {

    })
  },[]);
  
  return(
    <div style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}>
   {lisOfUser.map((user,i) => <Card key={i} user={user} />)}
   </div>
  );
}

export default App;
