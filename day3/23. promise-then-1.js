new Promise((resolve, reject) => {
    if(1) {
        const value = 10
        resolve(value)
    } else {
        const error = new Error('에러 발생')
        reject(error)
    }
}).then(data => {
    console.log(data)
}).catch(err=> {
    console.error(err)
}).finally(()=> {
    console.log("종료")
})