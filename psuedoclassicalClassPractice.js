function apartment(bedrooms) {
	this.what = 'apartment';
	this.bedrooms = bedrooms;
}

apartment.prototype.countRooms = function() {
	console.log('I have', this.bedrooms, 'bedrooms');
};

var myPlace = new apartment(3);

myPlace.countRooms();
