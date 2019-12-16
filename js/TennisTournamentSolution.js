function solution(a, b){
    var numOfGames;
    if (a <= 30000 && b <= 30000){
        if(a <= 0 || b <= 0){
            numOfGames = 0;
        }else if((a/2) == b || (a/2) < b){
            numOfGames = Math.floor(a/2);
        }else if((a/2) > b){
            numOfGames = b;
        }
    }else{
        numOfGames = "Parameters can not be greater than 30000!"
    }

    return numOfGames;
}
module.exports = solution;

function getSolution(){
            
    var p = document.getElementById("players").value;
    var c = document.getElementById("courts").value;
    
    var result = solution(p, c);
    if(isNaN(result))
    {
        document.getElementById("result").innerHTML = result;
    }else{

        document.getElementById("result").innerHTML = result +" games can be hosted in parallel.";
    }

}

