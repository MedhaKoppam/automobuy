const Transactionitems=({id,name,cost,fuel,color,status,category,sign})=>{

    return (<div className="menuItem">
        
        <h3>{name}</h3><h3>{cost}</h3><h3>{fuel}</h3><h3>{color}</h3><h3>{status}</h3><h3>{category}</h3>
        <div>
            {sign}
        </div>
        
    </div>
        
        
        )
}
export default Transactionitems