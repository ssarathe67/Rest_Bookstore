var mongoose =  require('mongoose');

//Genre Schema

var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// get genres

module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}

// Add genres

module.exports.addGenres = function(genre, callback){
  Genre.create(genre, callback);
}

// Update genres

module.exports.updateGenres = function(id, genre, options, callback){
  var query = {_id: id};
  var update = {
    name: genre.name
  }
  Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete genres

module.exports.deleteGenres = function(id, callback){
  var query = {_id: id};
  Genre.remove(query, callback);
}
