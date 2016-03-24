var downloader = require('./downloader');
var _bekazon = require('./bekazon');

var dl = new downloader();
dl.downloadArtist();

// var someArtist = 'uchot';
// var bekazon = new _bekazon();
// bekazon.getArtist(someArtist, function(err, artist){
	// if( err ){
		// console.log(err);
	// }else{
		// console.log(artist);
		
		// bekazon.getChapter(someArtist, null, function(err, chapters){
			// if( err ){
				// console.log(err);
			// }else{
				// console.log(chapters);
			// }
		// });
	// }
// });

// bekazon.getAllArtist(function(err, files){
	// console.log(err);
	// console.log(files);
// });