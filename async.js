function samplePromise(){
    return Promise.resolve("tes");
}

async function run(){
    const name = await samplePromise()
    console.info(name);
}

run();