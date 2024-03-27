
import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h1 className='bg-blue-400 text-black p-3 rounded-xl' >Tailwind css</h1>
      {/* yaha se jo value bhejenge vah props ke rup m jayegi jo ki ak object hai to usko ham object.property name  se use kar sakte hai ya direct jo name diye yha to vha bhi isi name distrutring kar lene  */}
      {/* yha par ham variable bhi pas kar sakte hai chahe vo object ho ya array */}
     <Card name = "krishna chauhan" btnText = "click me"/> 
     <Card name = "rahul kumar" btnText="explore me"/>
     <Card name = "rishabh kumar" btnText="aboute me"/>

    

    </>
  )
}

export default App
