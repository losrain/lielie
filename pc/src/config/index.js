let baseUrl = 'http://localhost';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://localhost2';
}


export default {
  'login': `${baseUrl}/login`
};