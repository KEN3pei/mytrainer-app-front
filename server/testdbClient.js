exports.testData = require('../database/test-data.json')

/**
 * @param {Object} testData
 * @returns {Number} num
 */
exports.count = () => {
    const data = exports.testData
    const count = Object.keys(data).length
    // console.log(count)
    return count
}

/**
 * 
 * @param {Array} NumArray 
 * @returns {Array} ramdomDatas
 */
exports.getRamdomData = (NumArray) => {
    const ramdomDatas = []
    for(let i = 0; i < NumArray.length; i++){
        exports.testData.forEach((object) => {
            if(Number(object.id) === NumArray[i]){
                ramdomDatas.push(object)
                return 
            }
        })
    }
    // console.log(ramdomDatas)
    return ramdomDatas
}
