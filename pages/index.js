import {db} from '../firebase'
import Link from 'next/link'
import {useState} from 'react'

export default function Home({Allblogs}) {
   const [blogs,setblogs] = useState(Allblogs)
  //  for hide the loadmore button when all the blogs are load
   const [end,setEnd] = useState(false)


   //  for load more button 
   const loadMore = async ()=>{
     const last  = blogs[blogs.length-1]
     const res = await  db.collection('blogs')
     .orderBy('createdAt','desc')
     .startAfter(new Date(last.createdAt))
    //  for show only 3 on home page 
     .limit(3)
     .get()
     const newblogs = res.docs.map(docSnap=>{
       return {
        ...docSnap.data(),
        // convert createdAt into millisec for error resolving
        createdAt:docSnap.data().createdAt.toMillis(),
        id:docSnap.id
      }
     })
     setblogs(blogs.concat(newblogs))

     if(newblogs.length < 3){
       setEnd(true)
     }
   }
  return (
    <div className="center">
        {blogs.map(blog=>{
          return(
            <div className="card" key={blog.createdAt}>
            <div className="card-image">
              <img src={blog.imageUrl} />
              <span className="card-title">{blog.title}</span>
            </div>
            <div className="card-content">
              <p>{blog.body}</p>
            </div>
            <div className="card-action">
              <Link href={`/blogs/${blog.id}`}><a>Read More</a></Link>
            </div>
          </div>
          )
        })}

        {end==false?
        <button className="btn #fb8c00 orange darken-1"
         onClick={()=>loadMore()}>Load more</button>
         :<h3>You have reached end</h3>
        }
        

        <style jsx>
           {`
            .card{
              max-width:500px;
              margin:22px auto;
            }
            p{
              display: -webkit-box;
              overflow: hidden;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
           `}
        </style>
    </div>
  )
}

// getServerSideProps (Server-side Rendering) For Static Home PAge 
export async function getServerSideProps(context) {
  // take a network request on firebase 
  const querySnap =await  db.collection('blogs').orderBy('createdAt',"desc")
  .limit(3)
  .get()
  const Allblogs =  querySnap.docs.map(docSnap=>{
    return {
      ...docSnap.data(),
      // convert createdAt into millisec for error resolving
      createdAt:docSnap.data().createdAt.toMillis(),
      id:docSnap.id
    }
  })


  return {
    props: {Allblogs}, // will be passed to the page component as props
  }
}