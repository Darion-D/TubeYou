const videos = [
    {
        url:"https://www.youtube.com/embed/SXxEEtDhXks",
        title: 'Synthwave / Spacewave Music Productivity',
        uploader: 'Josh Sparks'
    },
    {
        url: "https://www.youtube.com/embed/q9vdHoxuaQc",
        title: 'The Grand Tour Presents: A Scandi Flick',
        uploader: 'Amazon Prime'
    },
    {
        url: "https://www.youtube.com/embed/-JTCXCzm5Lc",
        title: '2007 Porsche 911 GT3 RS SharkWerks 3.9L: RCR',
        uploader: 'RCR'
    }
]

const db = require('./index');

async function reloadData() {
	try {
		let deleted = await db.Video.deleteMany({});
		console.log(deleted)
		// console.log(deleted);
		let reloading = await db.Video.insertMany(videos);
		console.log(reloading)
	} catch (err) {
		console.log(err);
	}
}

reloadData();

module.exports = videos