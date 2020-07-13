var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	address: {
		country: String,
		city: String,
		locality: String
	},
	email: String,
	fullname: String,
	middlename: String,
	lastname: String,
	gender: String,
	institution: String,
	mmcNo: String,
	contactNo: String,
	regFees: String,
	username: String,
	password: String,
	topics: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Topic"
	}]
});

module.exports = mongoose.model("User", userSchema);