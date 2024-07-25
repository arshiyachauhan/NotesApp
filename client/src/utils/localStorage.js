// create
function addToLocalStorage(key, value){
    if(typeof value === "object"){
        localStorage.setItem(key, JSON.stringify(value));
    } else{
        localStorage.setItem(key, value);
    }
}

// read
function getFromLocalStorage(key){
    let value = localStorage.getItem(key);
    if(!value)
        return null;
    
    try{
        return JSON.parse(value);
    }catch(error){
        return value;
    }
}

// update
function updateLocalStorage(key, updatedValue){
    let value = localStorage.getItem(key);
    if(!value)
        return null;
    
    try{
        localStorage.setItem(key, updatedValue)
    }catch(error){
        return value;
    }
}

// delete
function removeFromLocalStorage(key){
    localStorage.removeItem(key);
}

const methods={
    addToLocalStorage,
    getFromLocalStorage,
    updateLocalStorage,
    removeFromLocalStorage
}

export default methods;
