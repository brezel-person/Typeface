# Typeface
Projects for the Typeface Hack Club program.

Note: I didn't realize we had to write these commits as we go, so I'm going off of my memory as best I can for the first two.

1-3 hour: figuring out html and css syntax, trying to make css work with the html correctly, figuring out how to get the font to show up -- had an issue with that; I followed the tutorial but the font still didn't show up, so I spent some time figuring that out -- I. Around the third or second hour I moved onto adding an image and buttons, I also figured out how to add a border to the image (I struggled with getting that to work because I was trying to use the margin as the border at first), and customize the buttons, add text to them, align them nicely to the center -- I had to research how to do that, and learned how to use "div" to make them nicely arranged.

3-5 hour: making the buttons work and lead to the different pages, creating the "how can I learn to crochet" page, adding images, I also started to set up the quiz pages, and the buttons for that -- that's when I realized I bit off more than I could chew because I hd no clue how to make that work. Originally, I wanted all five of my buttons to lead to quizzes, but I realized I didn't know how to make the quizzes work at all. Online, I saw some examples of code that involved arrays and complicated functions and I had no idea how to do that. 
I wanted to practice my css/html/js with something more basic before diving into something more complex, so I made two of the pages into "articles" to make it simpler (the "how can I learn to crochet" and "is crochet for me" pages). 

5-6 hour: somewhere during the 5th hour I discovered it might be easier & simpler to use a library, and I found Bootstrap and jquery so I spent a lot of time trying to get them to work. It was pretty hard and I made the mistakes of:
- loading the web url instead of the library one
- putting the links & scripts in the wrong parts of my code
- having old, unfinished code from when I initially attempted to make a pop-up still running
It took me a while but eventually I got everything in place and was able to get started on creating the pop-ups

6-7:30 hour: making the buttons and the modal (pop-up) on the "info"/"is crochet for me" page work. I had to figure out how to use I had some issues with figuring out the css styling, because the footer background color wasn't changing how I wanted it to -- I ended up having to specify in my css that the code was for the footer. I also issues with changing the font on my paragraph -- I fixed it by adding an !important tag after the font and color codes, though I don't know what caused the issue. I also had an issue with renaming everything, because previously I had given all my buttons id's of "yes", "no", or "kinda", instead of unique names. So, I had to make sure they all had identifiable names, and all 3 of the different modals had consistent naming within. During this time I was able to make the entire "info" page work. Yay!!

7:30-9:30 hour: setting up the code for the "seasonal" crochet ideas page, adding accordions from the bootstrap library and making 4 of them, figuring out how to customize them (change color, change font, make them change color when clicked). 
I worked a little on my scary quiz page because I thought I would use the accordions for that, but I ended up changing my mind and using them for the seasonal crochet ideas page, I found the Popover feature in Bootstrap 
and I think it may fit better with the scary quiz. Also added a button with a modal to the "scary quiz" page during this time.

9:30 - 11:30 hour: added and customized Navigation bar (scrollspy) from the Bootstrap library to the learn crochet page, to make it easier to find an article fitting the user's crochet level. Figured out how to structure my "what to crochet" quiz, set up the questions, answers, figured out how to use container, styled everything with CSS. 

Worked on JS for the "quiz" page, made an object to store the info. 

11:30 hour - end: finally made the "quiz" work and give a unique answer based off of each of the choices. YAY!!
Filled out accordions for "seasonal" page with crochet recommendations. I had to re-write and edit some of the CSS to customize the accordions on the "scaryquiz" page b/c I had edited the styling for the previous page by styling the actual bootstrap class, so I had to make a new class and apply it to every part of the two accordions I made. It was challenging because of the confusing formatting (even though I indented it properly), and needing to replace or add in names that look similar to each other accross the code.

Added and stylized accordion for the scary quiz. Finished!

Added images to "seasonal crochet" page. Styled font-size to be more readable, styled images to fit in the accordions better.

Updated sizing of the "scaryquiz" accordions to be more readable when clicked on.

What I've learned:
- how to use CSS, HTML, JS together (I took some CS classes in school some time ago involving them in isolation, but I re-learned the syntax and learned for the first time how to use them/connect them with each other) 
- learned how to apply a library - bootstrap - to my project
- how to add images & alt text
- how to create, upload & use a font in my project
- how to make & use an object and functions in JS
