console.log('A: starting program')

async function saveArtwork(){
    console.log('B: Prepare artwork')

    const result = await Promise.resolve({
        insertedId: 'artwork-001'
    })

    console.log('D: Artwork saved:', result.insertedId)
}

saveArtwork()
console.log('C: Program continues')