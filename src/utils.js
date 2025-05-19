export const convertToIST = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hour '0' to '12' for 12 AM
    return `${hours}:${minutes} ${period}`;
  };
  
  export const getCountryName = (countryCode) => {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(countryCode);
  };
  