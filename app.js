console.log('INICIA')
function login(){
    console.log('login')
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Accept-Language", "es-419,es;q=0.9");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Origin", "https://scoredigital.facturaxion.com");
    myHeaders.append("Referer", "https://scoredigital.facturaxion.com/");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-site");
    myHeaders.append("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");
    myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Linux\"");

    const raw = JSON.stringify({
        "username": "Karely",
        "password": "Admin@123"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://scoredigitalapi.facturaxion.com/users/login", requestOptions)
        .then((response) => response.json())
        .then((logindata) => getIp(logindata))
        .catch((error) => console.error(error));
}

function getIp(logindata){
    console.log('getIp')
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then((data) => {
            let infoActivity = { "ip": data.ip, "agent": 'TESTL', "date": getCurrentDate() };
           savedata(logindata,infoActivity)
        })
        .catch((e) => {
            console.error('Error al obtener la IP:', e);
            navigate('/', { replace: true });
        });
}

function savedata(  logindata, infoActivity){
    console.log('savedata')
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Accept-Language", "es-419,es;q=0.9");
    myHeaders.append("Authorization", `Bearer ${logindata['data']}`);
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Origin", "http://localhost:3000");
    myHeaders.append("Referer", "http://localhost:3000/");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "cross-site");
    myHeaders.append("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");
    myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Linux\"");

    const raw = JSON.stringify({
        "ip": infoActivity?.ip,
        "agent": infoActivity?.agent,
        "date": infoActivity?.date
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://scoredigitalapi.facturaxion.com/users/user-activity", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

function getCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} - ${hour}:${minutes}`;
}

login()


