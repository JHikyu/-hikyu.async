let default_sleepTime = 2000;


async function sleep(time = default_sleepTime) {
    return new Promise(resolve => setTimeout(resolve, time));
}

module.exports = {
    sleep
};