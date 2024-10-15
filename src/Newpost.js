import React from 'react'

const Newpost = ({posttitle, setposttitle,postbody, setpostbody,handlesubmit}) => {
  return (
    <main className='newpost'>
      <h2>Newpost</h2>
       <form className='postform' onSubmit={handlesubmit}>
        <label htmlFor='posttitle' style={{fontSize:'1.3rem', fontWeight:'bold'}}>title</label>
        <input type='text' required id='posttitle' value={posttitle} onChange={(e)=>setposttitle(e.target.value)}/>

        <label htmlFor='postbody' style={{marginTop:'30px', fontWeight:'bold'}}>Body</label>
        <textarea required value={postbody} onChange={(e)=>setpostbody(e.target.value)}/>

        <button className="but"type='submit'>submit</button>


       </form>
    </main>
  )
}

export default Newpost
