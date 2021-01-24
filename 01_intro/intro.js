function expect(value) {
    return{
        toBe: exp => {
            if(value === exp){
                console.log('SUCCESS!')
            } else {
                console.log(`Value is ${value}, but is ${exp}`)
            }
        }
    }
}

const sum = (a,b) => a + b;

const nativeNull = () => null;

//console.log(sum(41,1));
//expect(sum(41,1)).toBe(43);

module.exports = { sum, nativeNull };
