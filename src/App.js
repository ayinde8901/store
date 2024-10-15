import Header from './Header.js';
import Nav from './Nav.js';
import About from './About.js'
import Home from './Home.js';
import Newpost from './Newpost.js';
import Postpage from './Postpage.js';
import Missing from './Missing.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import {format} from 'date-fns'
import { Navigate, Route, Routes , useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react';
import './App.css';

function App() {
  const[search,setsearch]=useState('')
  const [serchresult,setsearchresult]=useState([])
  const Navigate = useNavigate();
  const [posts, setposts] = useState([
    {
      id: 1,
      title: 'my first post application is here',
      datetime: 'July 01, 2022 11:23:36 AM',
      body: 'lorem ipsum , i am a softwware developer i work for melodia company in tinubu tom jones my mentor is my gir friend she is also a developer'
    },
    {
      id: 2,
      title: 'my second post application is here',
      datetime: 'July 01, 2022 11:23:36 AM',
      body: 'lorem ipsum , i am a softwware developer i work for melodia company in tinubu tom jones my mentor is my gir friend she is also a developer'
    },
    {
      id: 3,
      title: 'my every post application is here',
      datetime: 'July 01, 2022 11:23:36 AM',
      body: 'lorem ipsum , i am a softwware developer i work for melodia company in tinubu tom jones my mentor is my gir friend she is also a developer'
    },
    {
      id: 4,
      title: 'my third post application is here',
      datetime: 'July 01, 2022 11:23:36 AM',
      body: 'loremipsum, i am a softwware developer i work for melodia company in tinubu tom jones my mentor is my gir friend she is also a developer'
    },
    {
      id: 5,
      title: 'my last post application is here',
      datetime: 'July 01, 2022 11:23:36 AM',
      body: 'lorem ipsum , i am a softwware developer i work for melodia company in tinubu tom jones my mentor is my gir friend she is also a developer'
    }
]);
const [posttitle,setposttitle]=useState('');
const [postbody,setpostbody]=useState('');
useEffect(()=>{
  const filteresult = posts.filter(post =>
  ((post.body).toLowerCase()).includes(search.toLowerCase())
  ||  ((post.title).toLowerCase()).includes(search.toLowerCase()))
  setsearchresult(filteresult.reverse());
}, [posts,search])
const handlesubmit =(e)=>{
 e.preventDefault();
 const id = posts.lenght ? posts[posts.length -1 ].id + 1 : 1;
 const datetime = format(new Date(), 'MMM dd, yyyy');
 const newpost = {id,title: posttitle,datetime,body:postbody}
 const allpost =[...posts,newpost]
 setposts(allpost)
 setposttitle('')
 setpostbody('')
 Navigate('/')
}

const handledelete =(id)=>{
const postlist = posts.filter (post => post.id !== id)
setposts(postlist)
Navigate('/')
}

  return (
    <div className="App">
      <Header title={'ACE-LUXURY'}/>
      <Nav search={search} setsearch={setsearch}/>
      <Routes>
      <Route path='/' element={<Home posts={serchresult}/>} />
      <Route path='/poster' element={<Newpost posttitle={posttitle} setposttitle={setposttitle} postbody={postbody} setpostbody={setpostbody} handlesubmit={handlesubmit}/>}/>
      <Route path='/post/:id' element={<Postpage  posts={posts} handledelete={handledelete}/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
