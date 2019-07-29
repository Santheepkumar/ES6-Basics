function testCall(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url)
        request.onload = function() {
            if (request.status == 200) {
                resolve(request.response)
            } else {
                reject(Error(request.statusText))
            }
        }
        request.onerror = function () {
            reject(Error('Network Issues'))

        }

        request.send();
    });
}

testCall('https://rendomuser.me/api/').then(function (response) {
    console.log('Hurry')
}, function(error){
    console.log('Error there')
})