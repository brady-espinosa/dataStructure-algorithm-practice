//pseudoclassical version

function apartment(bedrooms) {
	this.what = 'apartment';
	this.bedrooms = bedrooms;
}

apartment.prototype.countRooms = function() {
	console.log('I have', this.bedrooms, 'bedrooms');
};

apartment.prototype.getBigger = function() {
	if (this.bedrooms < 5) {
		console.log('tiny homes are hip');
	}
};

var myPlace = new apartment(3);

myPlace.countRooms();
myPlace.getBigger();
