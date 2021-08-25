const tmp = [1,2,3,4,5,6,7,8,9]

const Givearray = (array, target) => {
    let hashMap = {},results = []
    for (let i = 0; i < array.length; i++){
        if (hashMap[array[i]]){
            results.push(hashMap[array[i]]+'+'+array[i])
        }else{
            hashMap[target - array[i]] = array[i];
        }
    }
    return results;
}
console.log(Givearray(tmp,10));