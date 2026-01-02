
export default function MainScreen({balance, loan}){
    return(
        <div >
            <header>
            <h1>useReducer Bank Account</h1>
            </header>
            <h2>Balance : {balance} </h2>
            <h2>Loan : {loan}</h2>
        </div>
    )
}