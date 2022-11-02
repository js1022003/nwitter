import AppRouter from "./Router";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(true);
  return <AppRouter isLoggedin= {isLoggedin}/>
}

export default App;
