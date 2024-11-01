import React from "react";
import Header from './components/Header'
import Item from './components/Item'

function App()
{
  const items = ["Apple", "Samsung", "One Plus"];

  return(
    <div >
      <Header title="Mobile Phone Brands I love"/>
     <ul>
      {items.map((item, index)=> (
<item key={index} name={item} />

      ))}
     </ul>
     </div>
  );
}
export default App;