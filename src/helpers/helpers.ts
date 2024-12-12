export const getIdFromUrl = (url:string):number =>{
    const splited = url.split('/')
    
    return Number(splited[splited.length-2])
}