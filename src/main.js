import page from "page"
import './main.css'
import homepage from "./pages/homepage/homepage";



page("/",() =>{
    const app = document.getElementById("app");
    app.innerHTML=``;
  app.appendChild(homepage())
})

page()