# Creatorverse
This project is for the Prework: Advanced Web Development (WEB103)
# WEB103 Prework - Creatorverse

Submitted by: Haseeb Chaudhury

About this web app: This creatorverse app is a crud application that allows users to create, edit, and delete a creator which will all be fetched 
by the supabase database using the await call. The creators are then displayed on the home page with their name, urls, image, and description. This app is done mainly in react and I have used tailwind to style my elements. 

Time spent: 20 hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [✔] **A logical component structure in React is used to create the frontend of the app**
- [✔] **At least five content creators are displayed on the homepage of the app**
- [✔] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [✔] **API calls use the async/await design pattern via Axios or fetch()**
- [✔] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [✔] **Each content creator has their own unique URL**
- [✔] **The user can edit a content creator to change their name, url, or description**
- [✔] **The user can delete a content creator**
- [✔] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements (instead of Picocss I have used tailwind css)
- [✔] The content creator items are displayed in a creative format, like cards instead of a list
- [✔] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!
 
  - [✔] Used tailwindcss for styling and website is responsive
  - [✔] Implemented a feature that when a user enters a blank form when creating a creator it will not allow them
  - to create as it will prompt them to fill all fields. Also, it invalidates urls that are not correct and implemented a feature
  - such that a user must provide at least 1 of the 4 social media urls to their creator. These same features are presented when editing a creator
  - [✔] Also, when a user is trying to add a creator they can't add the same urls of an existing creator within the database
  
## Video Walkthrough

Here's a walkthrough of implemented required features:

<!-- Replace this with whatever GIF tool you used! -->
Here is a video walkthrough of myself documenting the features within this app.
https://www.kapwing.com/videos/6484abf1073035001138ea27
>

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

Some of the challenges I faced during this project was working with supabase as this was my first time working this and it was a new tool for me. However, once i got used to it I learned how to interact with its features such as creating tables and editing rows and columns like making a column unique and such and it was overall a fun expereience. Other challenges was data validation as I wanted to implement features outside of this project that would enable a user to validate certain fields of the form. For example, if there was nothing in the form field I would want it to invalidate the submission and such. This was important because when working on future projects its important to ensure integreity and consitency of data and validation is an important skill to learn. I spend the majority of this project time on researching and learning data validation which helped me understood this concept better so I can apply it on future projects. Some minor issues are creating env file and implenting them since it is different in vite than react becasue I learned that you have to use meta and not just the process.env and lastly another minor issue was error handling in displaying error messages. Overall I've learned a lot from this project. 




## License

Copyright [👉🏿 2023] [👉🏿 Haseeb Chaudhury]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
