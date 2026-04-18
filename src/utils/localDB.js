
const addTOLocalDB = (newInteraction) => {
    const allData = getFromLocalDB();
    const isExistAlready = allData.some(d => d.id === newInteraction.id);

    if (isExistAlready === false){
        allData.unshift(newInteraction);
        localStorage.setItem('timeline', JSON.stringify(allData));
    }
}

const getFromLocalDB = () => {
    const allData = localStorage.getItem('timeline');
    
    if (allData){
        return JSON.parse(allData);
    }
    else {
        return [];
    }
}

export {getFromLocalDB, addTOLocalDB};