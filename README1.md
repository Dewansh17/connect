FOR IMAGE UPLOAD -ayush
steps
1 icon - createPost component line 94 to 97 CIImageOn uncomment
<!-- in post controller (added code ) -->
2 added img in 
3 let { img } = req.body;
4 if (!text && !img) {
			return res.status(400).json({ error: "Post must have text or image" });
		}

		if (img) {
			const uploadedResponse = await cloudinary.uploader.upload(img);
			img = uploadedResponse.secure_url;
		}
in server.js
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

Notfication --adnan
steps
1 In sidebar uncomment 53 - 61
2 made notification model for db
3 made nofication controller
4 made notification frontend - NotificationPage.jsx

Edit profile -pama
1 In editProfileModal uncomment button 37 se 42 (adding a button)
2 made hook for api call which calls controller
3 In user controller add Updateuser Function update only if curr pasword is correct and update the db 
    using line of user user = await user.save();

Comment 
1 uncomment comment icon (frontend) in post.jsx
2 changed post model added comment which is an array and store the comment text and commented user id 
3 added commentOnPost func in post controller 

Retweet -dewa
1 uncomment retweet icon (frontend) in post.jsx
2 changed user model and postmodel added retweetedpost and retweets which is an array
3 in post controller made retweeted post 


delete post
1 frontend 180 188 button
2 added deletePost in Post controller 38 line

bookmarks -- extra 
1 In sidebar uncomment 74 - 82
2 made notification model for db
3 made bookmark controller
4 made bookmark frontend - BookmarkPage.jsx
