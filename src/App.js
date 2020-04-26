import React,{useEffect,useState} from 'react';
import Deploy from './Components/Deploy';
import './App.css'
const App = () => {
    const [name,setName]=useState('');
    const [symbol,setSymbol]=useState('');
    const [decimals,setDecimals]=useState(0);
    const [totalSupply,setTotlaSupply]=useState(0);
    const [sub,setSub]=useState(false);
    useEffect(()=>{
        
    },[])
    return (
        <div className="outerApp">
            <div >
                <div className="formDesign">
                    <label>Token Name</label>
                    <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder="Your token name"/>
                    <label>Token Symbol</label>
                    <input type="text" onChange={(event)=>{setSymbol(event.target.value)}} placeholder="Your token symbol"/>
                    <label>Token Decimals</label>
                    <input type="text" onChange={(event)=>{setDecimals(event.target.value)}} placeholder="between 0 and 18"/>
                    <label>Token Total Supply</label>
                    <input type="text" onChange={(event)=>{setTotlaSupply(event.target.value)}} placeholder="1000000000"/>
                    <input type="submit" onClick={()=>setSub(true)} value="Submit"/>
                    {(sub) ? <Deploy name={name} symbol={symbol} decimals={decimals} totalSupply={totalSupply}/> : null}
                </div>
            </div>
            
            </div>
            )
        }
        
export default App;