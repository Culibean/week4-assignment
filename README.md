## Media Sources

Icon: <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Mihimihi - Flaticon</a>
Background: Image by <a href="https://pixabay.com/users/insightphotography-3337557/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4598188">InsightPhotography</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4598188">Pixabay</a>
Logo <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Rashad - Flaticon</a>

## URLS

Server: https://week4-assignment-1-mku5.onrender.com
Client: https://skylog-sjsz.onrender.com

## Design

<a href="https://www.figma.com/board/SvShCbdemR0aGn5KhkBSXr/Week-4---Skylog?node-id=0-1&t=eVaiXp5P0G3mg8Lk-1">Design template</a>

## Trello

<a href="https://trello.com/invite/b/693ad99218ae3c2cc58b090a/ATTIe0640807498ec6469743c6945c6088f1C803578B/week-4-assignment">Planning board</a>

## Requirements

🎯 Ensure your HTML form is working and submitting data into the database as expected.
🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
🎯 Create a working GET API route in your server.
🎯 Create a working POST API route in your client.
🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

## Reflection

🎯 What requirements did you achieve?

I believe I fulfilled all necessary requirements for the page to work.

🎯 Were there any requirements or goals that you were unable to achieve?

See below

🎯 If so, what was it that you found difficult about these tasks?

See below

# Additional Reflection

Planning:

I really enjoyed this stage. I'm used to working across several teams, so the planning stage wasn't totally new to me. I always wanted an app where I can log my flights, incl. plane types and locations. The desing and layout was quite quickly drawn up and as in my assignment last week, I started with the HTML structure and gave it some simple styling so I could better visualise the individual functions.

Building the server:

I feel this was the first week the process for full-stack has fully clicked. I found it surprisingly straight forward to follow the workshops during my assignment and set up the server route. I was able to test the POST method quite early in the process (<a href="./client/public/images/Postman_Test.jpg>">Test image here</a>). I had to fight my imposter syndrome though as I couldn't quite believe it would work first time. This assignment has shown me that I can trust myself better and while not everything makes comlete sense, I'm able to understand the smaller building stones and I'm able to build small applications now, which is a massive development from what I was able to do 4 weeks ago (mainly didn't even know what fullstack or git was).

All of the workshops this week were leading up to this build and a lot of the basic sctrucutre has been taken from those. I realised that it's not always necessary to "re-invent the wheel" and that I'm able to re-use and copy across code from previous assignments and workshops if functional. This made building the server and later the CSS file a lot easier.

Building the client:

My background is in data and I have experience working with Excel, so datasets are not new to me. I'm quite methodical when it comes to collecting data so early on I decided I wanted drop down menues in my form so the data collected is clean and can be used for future reporting (free hand text fields would make this difficult).

Setting up these drop down lists took a lot of my time. I know the theory that I had to set up all necessary data lists in individual tables on supabase. I then knew, based on the workshop, that the sever has to get this data in order for the client to fetch and display it. I took last weeks Cookie Clicker assignment as an example that I would need to loop each data field for it to become an option value in the drop down list. I also know that I needed the GET method and async await so the server is able to fetch the data in time for the client to load. From then on it was relatively simple to build the outline of the code.

I still find it difficult keeping track of all names and making sure I'm using the right const in functions to make sure they do what they needed to do. However, once I was able to build the airport loop, it was then a job of copy and paste it for the airline, date and aircraft list.

There was one issue I needed quite a lot of help. I realised there were some issues with how it displays the dates in the log entry container. It took me some time to read through supabase documentation and while I was able to create the basic structure I used AI to debug as I wasn't able to get it right in supabase. It then explained to me that there is an option with the command TO_Char. I added this in the queries.sql file and also changed the format in app.js. There were several issues again with the naming of each field, as everything had to match across the database, server and client.

The log entry container then was another challenge. Again, I used the cookie clicker challenge as an example as I knew the client had to fetch the data from the server. I also knew I had to include a loop as I wanted each entry in a separate field in the log, rather than just a paragraph.

Styling

Still my nemesis. Especially, responsive design. This time went through all past workshops, including week 1, and I feel like this time I managed to get a website that is both large and small screen compatible. I really apreciated the feedback I had on my last assignnments so I could also use the videos available to rewatch. Also, for the first time I realised that VScode has mdn references build in, so it was much easier to see what I can do with each command. However, I still sometimes struggle with understanding how one small change can have an impact on the whole design. I feel much more comfortable with the backend.

Conclusion

I really enjoyed this assignment, partially because the topic I have chosen really interests me and is something I will definitely build out in future, but I also felt like I am starting to undertand the individual connections a bit better. The workshops were super clear and gave a solid base for me to build on, so I felt less lost than I did in the last weeks when it came down to creative freedom within HTML and CSS.

I didn't add any stretch goals as I wanted to have the requirements properly in place. I felt like adding too much at this point wouldn't really help my understanding But this is definitely something I will add in the future, as I want to use Skylog for my personal use and create a Tableau chart to track flights.
