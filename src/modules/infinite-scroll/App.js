import './App.css';
import { useEffect, useMemo } from 'react';

function App() {

let lastElementObserve= new IntersectionObserver((entries, obeserve)=>{
  entries.forEach(entry=>{
      console.log("**",entries)
      if(entry.isIntersecting){                           // if the element is inside the viewPort now.
          console.log("**00",entry)
          // lastElementObserve.unobserve(entry.target)
          // setTimeout(()=>{
              renderMoreImage(8);
          // },500)
      }
  });
},{
  threshold:0.5,
  // delay:50
  // rootMargin:"-150px"
})


  let renderMoreImage=(count)=>{
    console.log("renderMoreImage",count)
    let parentDiv= document.getElementById("parent");

    for(let i=0;i<count;i++){
        let childDiv= document.createElement("img");
        childDiv.src= `https://picsum.photos/200/200?random=${i}`
        childDiv.loading="lazy";
        childDiv.alt=count+"renderMoreImage"
        parentDiv.appendChild(childDiv);
    }

    // let lastChildDiv = parentDiv.lastElementChild
    // lastElementObserve.observe(lastChildDiv)
}

let renderInitialImage=(count)=>{
  let parentDiv= document.getElementById("parent");

  console.log("renderInitialImage",count)
  for(let i=0;i<count;i++){
      let childDiv= document.createElement("img");
      childDiv.src= `https://picsum.photos/200/200?random=${i}`
      // childDiv.loading="lazy";
      childDiv.alt=count+"renderInitialImage"
      parentDiv.appendChild(childDiv);
  }
  // let lastChildDiv = parentDiv.lastElementChild
}

useEffect(()=>{
  let moreDiv= document.getElementById("more");
  renderInitialImage(42);
  lastElementObserve.observe(moreDiv)

},[])

  return (
    <div className="App">
      <div id ="parent"></div>
      <div id="more">loading...</div>
    </div>
  );
}

export default App;
