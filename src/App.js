import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {ToDos} from "./MyComponents/ToDos";
import {Footer} from "./MyComponents/Footer";

function App() {

const onDelete = ()=>{
  console.log("I am onDelete");
}

  let todos = [
    {
      sno:1,
      title: "Finish video from YouTube",
      desc: "Finish watching CodeWithHarry Video from YouTube"
    },
    {
      sno:2,
      title: "Build 1st basic react application",
      desc: "Build 1st basic react application instructed by CodeWithHarry"
    },
    {
      sno:3,
      title: "Start Course on Udemy",
      desc: "Finish 70 hours course from Udemy"
    }
  ]
  return (
    <>
      <Header title="MyToDosList" searchBar={true}/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;

//test