import React,{useState,useRef} from 'react'
import "./img.css"
const Img = () => {
//   const[imageurl,setimageurl]=useState("/")
//   let inputref=useRef(null)

//   const imagegenerator=async()=>{
//     if (inputref.current.value===""){
//         return 0;
//     }
//     const response= await fetch()
//   }


  return (
    <div className='aiimagegenerator'>
        <div className='header'>Ai-Image<span>Generator</span></div>
        <div className='imageloading'>
            <div className='image'><img id="kl" src="https://aijettech.com/wp-content/uploads/2024/01/top-best-free-ai-image-generator.webp"/></div>
        </div>
        <div className='searchbar'>
            <input type='text'   className='searchinput' placeholder='Give the prompt to Generate Image'/>
            <div className='generatorbtn'>Generator</div>
        </div>
     
    </div>
  )
}

export default Img
