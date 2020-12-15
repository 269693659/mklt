export function getUrlParams(name){
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let params = window.location.search.substr(1).match(reg)
    if(params != null){
        return unescape(params[2])
    }else{
        return null
    }
}