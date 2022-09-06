# TubeYou

 TubeYou is a simple video site where the user can view, upload, edit, and delete videos. The user will also be able to add comments to each video.


## Screenshots

![screenshot1](https://i.ibb.co/HzcYGwh/Screen-Shot-2022-09-03-at-2-01-59-PM.png)
![screenshot1](https://i.ibb.co/TwRpv7h/Screen-Shot-2022-09-03-at-2-01-36-PM.png)
![screenshot1](https://i.ibb.co/8g8yQjR/Screen-Shot-2022-09-03-at-2-02-25-PM.png)
![screenshot1](https://i.ibb.co/0yHgcs7/Screen-Shot-2022-09-03-at-2-02-46-PM.png)

## Technologies Used

 JavaScript, HTML, CSS, ejs, MongoDB, Mongoose, Express, Node.js


## Getting Started

 The homepage lists all videos with links the their specific pages. Each page will also have a link to upload a video, and to return to the homepage. To watch a video, just click the video tag. From the specific video page, the user will also be able to comment on the video. The video page also has a link that leads to a page to edit that specific video.


## Next Steps

 We would like to add user authorization and authentication, which would also enhance some features already in place. We want have clickable images on the homepage that corresponds to each video.


 ## Links
  Github - https://github.com/Darion-D/Project_2
  Heroku - https://project-2-tubeyou.herokuapp.com/videos


  ## Our favorite lines of code

                  
1:     <% for( let i=0; i<comments.length; i++){ %>
         <p id="comment">
          <%=comments[i].body%>   /   <%=comments[i].createdAt%>
        </p>
                           
2:     input name="video" type="hidden" value="<%=video._id%>"

3:        #video {
       display: block;
       padding: 15px;
       font-size: 1.5em;
       text-align: center;
       color: black;
       text-shadow: 1.5px 1.5px gray; <---
       }