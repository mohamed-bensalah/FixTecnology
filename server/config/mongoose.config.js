const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1/project", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`connection to the database ${mongoose.connection.name} hmd yee rabi`))
	.catch(err => console.log(`Something went wrong when connecting to the database with this ${err}`));
