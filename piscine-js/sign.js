function sign(a) {
    if (a == 0) {
        return 0
    } else if (a < 0) {
        return -1
    } else {
        return 1
    }
}


function sameSign(a, b) {
    if (a < 0 && b < 0 || a > 0 && b > 0) {
        return true
    } else if(a == 0 && b==0){
        return true
    }  
    return false
}
 