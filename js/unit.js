const getUrlParam = (key) => {
    const param = window.location.search.substring(1)
    const paramArr = param.split('&')
    const paramObj = {}
    for (var i=0;i<paramArr.length;i++) {
        var pair = paramArr[i].split("=");
        paramObj[pair[0]] = pair[1] || null
    }
    if(key){
        return paramObj[key]
    }else{
        return paramObj
    }
}
const getUrl = () => {
    const href = window.location
    return href.origin + href.pathname
}
//读cookies
const getCookie = name => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return decodeURIComponent(arr[2]);
    else
        return null;
}
const ls_get = (key) => {
    let val = window.localStorage.getItem(key)
    if(val){
        try {
            return JSON.parse(val)
        } catch (error) {
            return ''
        }
    }else{
        return ''
    }
}
const ls_set = (key,data) => {
    window.localStorage.setItem(key,JSON.stringify(data))
}