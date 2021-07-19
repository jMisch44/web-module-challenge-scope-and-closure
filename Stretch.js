var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(number){
    function addSix(){
        return number + 6;
    }
    return addSix();
}

console.log(createBase(10));