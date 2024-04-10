
import './App.css'
import ForwardRef2 from './ForwardRef2'
import Fragment1 from './Fragment1'
import Fragment2 from './Fragment2'
import Lazy1 from './Lazy1'
import Memo1 from './Memo1'
import Memo2 from './Memo2'
import Memo3 from './Memo3'
import StrictMode1 from './StrictMode1'
import StrictMode2 from './StrictMode2'
import StrictMode3 from './StrictMode3'
import StrictMode4 from './StrictMode4'
import Suspense1 from './Suspense1'
import Suspense2 from './Suspense2'
import Suspense4 from './Suspense4'
import ForwardRef1 from './forwardRef1'
import ForwardRef3 from './forwardRef3'

function App() {
  return (
    <>
      <h1>Built-in React Components</h1>
      <hr />
      <h1>1.Fragment (<>...</>)</h1>
      <hr />
      <h2>Fragment Problem 1</h2>
      <Fragment1/>
      <hr />
      <h2>Fragment Problem 2</h2>
      <Fragment2/>
      <hr />
      <h1>2.Profiler</h1>
      <h2>There is no code example .....</h2>
      <hr />
      <h1>3.StrictMode</h1>
      <hr />
      <h2>StrictMode Problem 1 </h2>
      {/* <StrictMode1/> */}
      <hr />
      <h2>StrictMode Problem 2 </h2>
      {/* <StrictMode2/> */}
      <hr />
      <h2>StrictMode Problem 3 </h2>
      {/* <StrictMode3/> */}
      <hr />
      <h2>StrictMode Problem 4 </h2>
      {/* <StrictMode4/> */}
      <hr />
      <h2>Strict mode is internal so we have to see the examples on the site </h2>
      <hr />
      <h1>3.Suspense</h1>
      <hr />
      <h2>Suspense1 problem</h2>
      {/* <Suspense1/> */}
      <hr />
      <h2>Suspense2 problem</h2>
      {/* <Suspense2/> */}
      <hr />
      <h2>Suspense3 problem</h2>
      {/* <Suspense3/> */}
      <hr />
      <h2>Suspense4 problem</h2>
      {/* <Suspense4/> */}
      <h2>suspense endss here ...........</h2>
      <hr />
      <h1>Built-in React APIs</h1>
      <br />
      <h1>1.createContext</h1>
      <h2>there is no code example .........</h2>
      <hr />
      <br />
      <h1>2.forwardRef</h1>
      <br />
      <h2>forwardRef1 problem </h2>
      <ForwardRef1/>
      <hr />
      <h2>forwardRef2 problem </h2>
      <ForwardRef2/>
      <hr />
      <h2>forwardRef3 problem </h2>
      <ForwardRef3/>
      <hr />
      <h1>lazy</h1>
      <hr />
      <h2>lazy1 problem </h2>
      <Lazy1/>
      <hr />
      <h2>lazy done  ........</h2>
      <hr />
      <h1>memo  </h1>
      <br />
      <h2>Memo1 problem </h2>
      <Memo1/>
      <hr />
      <h2>Memo2 problem </h2>
      <Memo2/>
      <hr />
      <h2>Memo3 problem </h2>
      <Memo3/>
      <br />
      <h1>memo ends here .........</h1>
      <hr />
      <h1>startTransition </h1>
      <br />
      <h2>there is no code example ... </h2>
      <hr />
      <h1>Directives </h1>
      <br />
      <h3>use client </h3>
      <h3>use server </h3>
      <h2>we have to see it from the site ........</h2>
      <br />
      react-dom@18.2.0 starts from here ... 
    </>
  )
}

export default App
