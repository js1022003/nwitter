import React from "react";
import { useState } from "react";
import { db } from './../fbase';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';


const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    try{
        const docRef = await addDoc(collection(db,"nweets"),{
            nweet,
            createdAt: Date.now(),
        });
        console.log(docRef.id);
    }catch(e){
        console.log(e);
    }
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={nweet} onChange={onChange} type="text" placeholder="Whats?" maxLength={120} />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
