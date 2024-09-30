export function extractTime (dateString){
    const date = new Date(dateString);
    const hour = padZero(date.getHours());
    const minute = padZero(date.getMinutes());
    return `${hour}:${minute}`
}
function padZero(number){
    return number.toString().padStart(2,"0")
}