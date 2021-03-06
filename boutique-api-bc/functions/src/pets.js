const admin = require('firebase-admin')
const fbcreds = require('../credentials.json')


function connectDb() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(fbcreds),
    })
  }
  return admin.firestore()
}




exports.createPet = (req, res) => {
  if (!req.body) {
    res.status(401).send('Invalid request')
    return
  }
  const db = connectDb()
  db.collection('Pets')
    .add(req.body)
    .then(docRef => res.status(201).send('Pet Created'))
    .catch(err => res.status(500).send(err))
}