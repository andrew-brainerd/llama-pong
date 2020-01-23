const wait = async waitTime => await new Promise(resolve => setTimeout(resolve, waitTime || 3000));

export default wait;
