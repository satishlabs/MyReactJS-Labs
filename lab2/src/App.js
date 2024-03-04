
import { React } from 'react';
import './App.css';

const App =()=> {
    const companyName = "SatishLabs";
    let courseName = "ReactJS";
  return (
    <div className="myclass">
     <p className="myclass1">Welcome to {companyName}!!</p>
     <p className="myclass2">You are learning {courseName} from Satish Prasad</p>
    </div>
  );

}

export default App;
