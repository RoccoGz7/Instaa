import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Post from './Post'
import {db} from './firebase';
function App() {

  const [posts, setPosts] = useState ([
    { 
      imageSrc:'https://media.tycsports.com/files/2022/12/20/517867/leo-messi-copa-del-mundo_w416.webp',
      username:'Leo Messi',
      caption:'Mbappe culo roto'
    },
    {
      imageSrc:'https://media.tycsports.com/files/2022/12/20/517868/lionel-messi-copa-del-mundo_w862.webp',
      username:'Rodri De Paul', 
      caption:'ESPERAME TINI'
    }

  ]);

  useEffect(() =>  {
    db.collection('posts').onSnapshot(x => {
      setPosts(x.docs.map(doc => doc.data()));
    })
  }, []);  

  return (

      <div className='app'>
        <Header/>

        {posts.map((ele) =>
          <Post imageSrc={ele.post.imageSrc}
          username={ele.post.username}
          caption={ele.post.caption} />
        )}
        
        
      </div>
  );
}

export default App
 