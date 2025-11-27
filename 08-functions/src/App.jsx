// import React from 'react'

// const App = () => {
//   // function mouseEnter(){
//   //   console.log("mouse enter")
//   // }
//   // function inputChanging(){
//   //   console.log("user is typing")
//   // }
//   // function inputChange(val){
//   //   console.log(val);
//   // }

//   const pageScrolling = (elem)=>{
//     // console.log("page is scrolling at speed",elem)
//     if(elem>0){
//       console.log("scrolling down")
//     }else{
//       console.log("scrolling up")
//     }
//   }
//   return (
//     <div>
//       {/* <h1>Hello, guys</h1>
//       <button onClick={function(){
//         console.log('button is clicked')
//       }}>change user</button>
//        <button>Explore this</button> */}
//        {/* <input onChange={function(elem){
//         console.log(elem.target.value)
//        }} type="text" name="" id="" placeholder='input name' />

//        <input onChange={(function(elem){
//                    inputChange(elem.target.value)
//        })} type="text" /> */}

//        {/* <div className='box' onMouseMove={(elem)=>{
//         console.log(elem.clientX, elem.clientY);
        
//        }}></div> */}

//        <div onWheel={(elem)=>{
//         pageScrolling(elem.deltaY)
//         // pageScrolling(elem.deltaY)
//        }}>
//         <div className="page1"></div>
//         <div className="page2"></div>
//         <div className="page3"></div>
//        </div>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('hello')
  }
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default App
