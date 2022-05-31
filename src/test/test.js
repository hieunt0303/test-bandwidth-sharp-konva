import axios from 'axios';

axios.get('http://localhost:4001/get/tour')
    .then(res => {
        // console.log(typeof res.data.data[0].listStartedDate);
        let list = res.data.data[0].listStartedDate
        // console.log(JSON.parse(list));
    })


let a = [
    { start: '01/04/2022', deadline: '28/03/2022', max: 20, registered: 15 }, 
    { start: '04/04/2022', deadline: '01/04/2022', max: 20, registered: 15 }
]
console.log(JSON.stringify(a));