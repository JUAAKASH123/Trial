import useCounter from "./useCounter";


function Custome_Hook(){
    const{ count, increment, decrement}=useCounter();

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Custome_Hook