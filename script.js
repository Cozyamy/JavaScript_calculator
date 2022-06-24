let operations={
    '+':"Addition",
    '-':"Subtraction",
    "/":"Divison",
    '*':"Multiplication"
}
function calculator(){
    let operation = prompt("What Operations Would You Like To Perform [+,-,/,*]")
    let op1= prompt("Enter First Number")
    let op2= prompt("Enter Second Number")
    let result=0
    if (isNaN(op1) || isNaN(op2)) {
        throw   new Error("Alphabets  Not allowed Only Number")
    }
    
    else{
        parseFloat(op1)
        parseFloat(op2)

        if(operation ==="-"){
            result=op1-op2
        }
        else if(operation ==="+"){
            result=op1+op2
        }
        else if(operation ==="/"){
            result= op1 /op2
        }
        else if(operation ==="*"){
            result=op1*op2
        }
        else{
            alert("invalid Operation Cannot Perform operation")
        }

    }     
    alert(`Your operation: ${operations[operation]}\n The Result is ${result}`)
}
try{
  calculator()
}
catch(err){
    alert(err)
}