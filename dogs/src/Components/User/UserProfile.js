import React from 'react';
import { useParams } from 'react-router';
import Feed from '../Feed/Feed'

const UserProfile = () => {

  const { user } = useParams()

  return <section clasName="container mainSection">
    <h1 className="title">{user}</h1>
    < Feed user={user}/>
  </section>
}

export default UserProfile