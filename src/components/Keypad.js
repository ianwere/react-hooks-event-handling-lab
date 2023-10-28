// Code Keypad Component Here

function Keypad (){
    return (
        <form>
          <input type="password" name="password" placeholder="Enter password..." onChange={(e)=> (console.log('Entering password...'))} />
        </form>
    )
}

export default Keypad;