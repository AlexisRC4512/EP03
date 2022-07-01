export const useFetch = (url, callback) => {

    return async ()=>{
       
        try {
            const data = await fetch(url);
            const json = await data.json();
            callback && callback(json);
        } catch (err) {
            console.error(err);
        }
    
    }
}
