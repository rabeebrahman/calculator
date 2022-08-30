function DisplayNum(num){
    result.value+=num
}
function Allclear(){
    result.value=''
}

function Evaluate(){
    // exp=result.value
    // out=eval(exp)
    // result.value=out
    result.value=eval(result.value)
}

function Rem(){
    ce=result.value
    result.value=ce.slice(0,-1)
}