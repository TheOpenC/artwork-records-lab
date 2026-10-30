import { MongoClient } from 'mongodb'

const connectionString = process.env.MONGODB_URI

MongoClient.connect(connectionString)
    .then(client => {
        console.log('\x1b[32mConnected to Database\x1b[0m')
        const db = client.db('artwork-records-lab')
        const worksCollection = db.collection('works')

        console.log('Database:', db.databaseName)
        console.log('Collection:', worksCollection.collectionName)
        const artwork = {
            title: 'Untitled (Study)',
            artist: 'Example Artist',
            year: 2024,
            medium: 'Graphite on paper',
            condition: 'Unexamined'
        }

        return worksCollection.insertOne(artwork)
            .then(result => {
                console.log('Artwork created:', result.insertedId)
            })
            .finally(() => client.close())
    })

    .catch(error => console.error(error))