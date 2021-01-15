export default function formatDate(date) {

    // Format day/month/year to two digits
    var formattedDate = ('0' + date.getDate()).slice(-2);
    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear().toString().substr(2,2);

    // Combine and format date string
    return formattedMonth + '/' + formattedDate + '/' + formattedYear;

} 