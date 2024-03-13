"use client";

import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/Home";
import { useState } from "react";

function Page() {
  const [log, setLog] = useState(true);
  const [logIn, setLogIn] = useState(false);

  const changeLog = (val) => {
    setLog(val);
  }
  return (
    <div className="h-screen flex justify-center items-center">
      {logIn ? <Home/> : log ? <Login changeLog={changeLog}/> : <SignUp changeLog={changeLog}/>}
    </div>
  );
}

export default Page;

// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../lib/Features/Counter/counterSlice";

// export default function Home() {
// //useSelector gets the state from store
//   const count = useSelector((state) => state.counter.value); // Access the counter state

// //useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {count}</h1> {/* Display the counter state */}
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }
