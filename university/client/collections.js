// Utility to add entities to DB
collections = {};

function makeCollection(name) {
	collections[name] = new Mongo.Collection(name.toLowerCase());
	return collections[name];
}

CourseInfo = makeCollection("CourseInfo");
ProfessorInfo = makeCollection("ProfessorInfo");
SectionInfo = makeCollection("SectionInfo");
