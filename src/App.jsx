import './App.css';
function App(props) {
  let data =props.props
  let gallerystyle = {
   textAlign:"center"
    
  }

  return (
    <>
    <h1 style={gallerystyle}>Kalvium Gallery </h1>
    <div className='Container'>
     <img src={data[0].img} alt="" width={"700px"} />
     <img src={data[1].img} alt="" width={"700px"} />
     <img src={data[2].img} alt="" width={"700px"} />
     <img src={data[3].img} alt="" width={"700px"} />
    </div>

    </>
  )
  // code here
}

export default App;
