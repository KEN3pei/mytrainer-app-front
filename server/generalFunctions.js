/**
 * @param {*} maxNum 
 * @param {*} elementCount 
 * @returns {Array} ramdomNums
 */
 exports.getRamdomNums = (maxNum, elementCount) => {
    let ramdomNums = []
    for(let i = 0; i < elementCount; i++){
        const ramdom = Math.random() * (maxNum - 1) + 1;
        if(ramdomNums.find(el => parseInt(ramdom) === el)){
            i--
        }else{
            ramdomNums.push(parseInt(ramdom))
        }
    }
    // console.log(ramdomNums)
    return ramdomNums
}