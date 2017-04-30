var someObject = {
	friends: [
	{name: "Malfoy"},
	{name: "Crabbe"},
	{name: "Goyle"}
	],
	color: "baby blue",
	isEvil: true
};

someObject.friends[0];

var movie = [
{
	Title : "A Aa",
	Rating: "4 stars",
	Seen: "Watched",
},
{
	Title : "GabbarSingh2",
	Rating: "2 star",
	Seen: "Not seen",
},
{
	Title : "Srimanthudu",
	Rating: "3.5 star",
	Seen: "Watched",
},
{
	Title : "Conjuring2",
	Rating: "4.5 star",
	Seen: "Not seen",
}
]

for (var i = 0; i < movie.length; i++) {
	console.log("you have "+movie[i].Seen + " "	 + movie[i].Title + "-" +movie[i].Rating+".");
}