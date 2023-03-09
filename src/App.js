import React from "react";

function App() {
  const [dados, setDados] = React.useState(null);

  function random() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    fetch("https://icanhazdadjoke.com", config)
      .then((response) => response.json())
      .then((data) => setDados(data));
  }

  return (
    <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <button style={{width:'120px', height:'50px', borderRadius:'15px', color:'#fff', background:'#450969', border:'none'}}  onClick={random}>Piada Aleatoria</button>
      {dados && (
        <div style={{width:'600px', height:'400px', background:'#450969', color:'#fff',marginTop:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{textAlign:'center'}}>{dados.joke}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
