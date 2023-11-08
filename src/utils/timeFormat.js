const timeFormat = (time) => {
const originalDate = new Date(time);
const formattedDate = `
    ${originalDate.getFullYear()}년 
    ${originalDate.getMonth() + 1}월 
    ${originalDate.getDate()}일`;
return formattedDate
}

export default timeFormat;