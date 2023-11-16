function cookieParser(cookieString) { 
    if (cookieString === "") 
        return {}; 
    let pairs = cookieString.split(";");
    let splittedPairs = pairs.map(cookie => cookie.split("="));

    const cookieObj = splittedPairs.reduce(function (obj, cookie) { 
        obj[decodeURIComponent(cookie[0].trim())] 
            = decodeURIComponent(cookie[1].trim()); 
        return obj; 
    }, {})

    return cookieObj; 
}

let dummyCookieString =  
    "username=Quang; gfg=Lab2; foo=UIT"; 
    
// Pass document.cookie to retrieve actual cookies 
let cookieObj = cookieParser(dummyCookieString); 
    
console.log(`cookie gfg has value ${cookieObj['gfg']}.`); 
console.log(`cookie foo has value ${cookieObj['foo']}.`); 
