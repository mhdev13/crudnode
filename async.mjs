function samplePromise(){
    return Promise.resolve("tes");
}

const nama = await samplePromise()
console.info(nama);
