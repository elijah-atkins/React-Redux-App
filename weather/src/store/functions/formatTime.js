export const formatTime = (date) =>{
    const dateStr = new Date(date).toLocaleTimeString('en-US');
    return `${dateStr.slice(0, dateStr.length-6)}  ${dateStr.slice(dateStr.length-2)}`;
};

// export const formatTime = (date) =>{
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
// };