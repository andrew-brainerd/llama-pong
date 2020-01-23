const wait = async waitTime => new Promise(resolve => setTimeout(resolve, waitTime || 3000));

export default wait;
