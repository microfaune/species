import axios from 'axios'


const fetchBird = async () => {
    const response = await axios.get('https://www.xeno-canto.org/api/2/recordings?query=struthio+camelus+australis')
    console.log(response)
}
fetchBird()
console.log('Hello')