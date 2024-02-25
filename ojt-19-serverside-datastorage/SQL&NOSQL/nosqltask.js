// Membuat Database Baru
use belajardb

// Data base tidak akan muncul di show dbs jika tidak menambah collection ke dalam database.

//  use belajardb
//  show collections
// Show / select document in collection.
db.movies.find()

// Insert Data with 1 value
db.belajardb.insertOne({
  ... _Id:1,
  ... name: "Selamet Saputra",
  ... class: 1});

// insert data with multiple value
// Create Collections
db.createCollection('movies');
  db.movies.insertMany([
    {
       title: "Jurassic World: Fallen Kingdom",
       genres: [ "Action", "Sci-Fi" ],
       runtime: 130,
       rated: "PG-13",
       year: 2018,
       directors: [ "J. A. Bayona" ],
       cast: [ "Chris Pratt", "Bryce Dallas Howard", "Rafe Spall" ],
       type: "movie"
     },
     {
       title: "Tag",
       genres: [ "Comedy", "Action" ],
       runtime: 105,
       rated: "R",
       year: 2018,
       directors: [ "Jeff Tomsic" ],
       cast: [ "Annabelle Wallis", "Jeremy Renner", "Jon Hamm" ],
       type: "movie"
     },
     {
      title: "Twilight",
      genres: [ "Comedy", "Action", "Romance" ],
      runtime: 105,
      rated: "R",
      year: 2012,
      directors: [ "Jeff Tomsic" ],
      cast: [ "Annabelle Wallis", "Jeremy Renner", "Jon Hamm" ],
      type: "movie"
    }
 ]);
// Referensi : https://www.mongodb.com/docs/mongodb-shell/crud/update/
// Update collections.
 db.movies.updateOne( { title: "Twilight" },
{
  $set: {
    runtime: 120
  },
  $currentDate: { lastUpdated: true }
});

// Delete one Collections
db.movies.deleteOne( { cast: "Annabelle Wallis" } )

