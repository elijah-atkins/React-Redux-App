const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const getDate = (num) => {
    if (num % 10 === 1 && num !== 11) {
        return `${num}st`
    }else if(num % 10 === 2 && num !== 12) {
        return `${num}nd`
    }else if(num % 10 === 3 && num !== 13) {
        return `${num}rd`
    }else{
        return `${num}th`
    }
}
export const returnDate = (str='') =>{
    const dateArr = str.split('-').map(Number);
    return getDate(dateArr[2]); 
}
export const returnMonth = (str='') =>{
    const dateArr = str.split('-').map(Number);
    return months[dateArr[1]-1]
}