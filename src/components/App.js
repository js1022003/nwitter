import AppRouter from "./Router";
import { useState } from "react";
import firebase from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from 'fbase';

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid;
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  console.log(isLoggedin);
  return (
    <>
      {init ? <AppRouter isLoggedin={isLoggedin} /> : "Intializing.."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
