export default function UpgradeButton(props) {
    return (
      <>
      <div className="things">
          <button onClick={()=>props.buyUpgrade(10, 1)}> <img src="kennel.webp" /> Kennel Thing - costs 10 +1</button>
         
          <button onClick={()=>props.buyUpgrade(100, 10)}> <img src="bennings.webp"/> Bennings Mutation - costs 100 +10</button>
        
        <button onClick={()=>props.buyUpgrade(1000, 100)}> <img src="norris.jpg"/> Norris Mutation - costs 1000 + 100</button>
         
         <button onClick={()=>props.buyUpgrade()}> <img src="palmer.webp"/> Palmer Mutation </button>
      
    
      </div>
      </>
      
    );
  }