
import "./header.css"
const Header = ()=>{
   

const section =document.createElement("div");
section.classList.add("example");
 section.innerHTML=`
  <h2>Header</h2>
 `
    return section;
}
export default Header ;
