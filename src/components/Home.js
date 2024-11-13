import React from 'react';
import '../styles/Home.css'
import {useQuery} from "@apollo/client";
import {GET_USERS} from "../graphql/query";

function Home(props) {

  const {loading, error,data} = useQuery(GET_USERS)

  if(loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  console.log(data)

  return (
      <div className="home-container">
        <header className="home-header">
          <div className="search-container">
            <input
            type="text"
            placeholder="Search"
            />
          </div>
        </header>
        <nav className="home-nav">
          <button>버튼</button>
        </nav>
        <main className="home-main">
          <ul>{data?data.getUsers.map((user,index)=>(
              <div key={index}>
            <li>{user.id}</li>
            <li>{user.email}</li>
            <li>{user.name}</li>
              </div>
              )):<></>

          }
          </ul>
        </main>
      </div>
  );
}

export default Home;