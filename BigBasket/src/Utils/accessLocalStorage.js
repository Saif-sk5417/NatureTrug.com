 
const loadData=(key)=>{
    try{
        let data=JSON.parse(localStorage.getItem(key))
        return data;
    }
    catch(e){
        return "undefined";
    }
   
}
const saveData=(key,sdata)=>{
    localStorage.setItem(key,JSON.stringify(sdata));
}
export { loadData,saveData }