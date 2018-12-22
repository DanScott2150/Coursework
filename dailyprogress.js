
===== 10.25 =====
  - Course: Udemy, Adv WebDev BootCamp
    - Topic: Advanced Array Methods

Covered array.forEach(), array.Map(), array.Filter(), array.Some(), array.Every()
**Lots of good exercises included in this section - should re-visit from time to time to make sure I actually know it

================== 11.03 =================
--> JavaScript: The Weird Parts

Quick look at idea of Lexical Environment and Execution Context. New functions create new EC's
when invoked. What happens when an EC is created, and how 'this' gets assigned. Also looks at hoisting,
and how global variables are actually attached to the global window object. Single-threaded, synchronous execution.
Scope and which variables are available where.


===== 11.05 =====

- Adv WebDev BootCamp: S11-123

Keyword 'this'. How it's determined, global vs. bound to an object.
Call/apply/bind.

**Need to re-visit exercises


===== 11.09 =====
- Course: Advanced Bootcamp
  - Topic: S12 - Object Oriented Programming in JS
    -

  - Course: JS Weird Parts
  - Topic: By value vs. by reference


===== 11.10 =====
  - Advanced Bootcamp: Section 12 OOP
    - 'new' Keyword
    - Constructor functions in place of classes
    - Putting constructors within one another; using call/apply to bind 'this'
    - Prototypes & __proto__, prototype chain, inheritance

  Next section: Creating JSON API's with Node and Mongo.
  Section intro says main goal of section is to prepare for learning React. Woooo!

  Solid day. Finished the AdvBootcamp section on OOP. Definitely tied in well with what I
  learned the other day in the WeirdParts course, specifically about 'by reference' vs. 'by value'.
  Still a little shaky on prototypes & inheritance, will want to re-visit at some point.

  Next section is a codealong project section, creating a JSON API with node & mongo, and then
  a simple SPA to interact with it. Section intro says it's basically a pre-req for learning React.

===== 11.11 =====
  - Adv Bootcamp S13: JSON API with Node & Mongo
  Set up basic node & mongo API framework for creating to-do SPA in next section.
  Mostly review, all stuff that was covered in the YelpCamp project, but good quick refresher

  - Adv Bootcamp S14: To-Do App Codealong
  Started, got through initial set-up sets.
  Note: in node routes, using res.sendFile() rather than res.render(). This is because sendFile
  serves a static file. render is used when using EJS templates

===== 11.12 =====
  - Adv Bootcamp S14: To-Do App Codealong
  Finished section. Project is a SPA to-do list, using node & mongo & AJAX.
  Created via CloudNine (c9.io), which was recommended to avoid having to install & configure
  mongo & mongoose locally.

** Note to research further: Codealong makes AJAX requests via: $.getJSON(), $.post()
This is different than how we made AJAX requests in the WordPress REST API courses?

===== 11.13 =====

  - Adv Bootcamp S15: ES6/ES2015
  Finished section, though just kinda 'skimmed' the back half. Learned about let & const and
  arrow functions, though I was already pretty familiar with these. Learned about other ES6 additions
  like destructuring and the rest/spread operator. Definitely feel like I don't have a great handle
  on these, but I think a lot of that will come from actually seeing them out in the wild, as opposed
  to in basic course examples.

  **Exercises in this section that I need to come back to

  Note: Might be a good time to officially re-start the Wes Bos JavaScript30 course. From the times
  I've looked at it in the past, it makes heavy use of ES6 functionality. Would probably be good practice.

  Current gameplan:
  - Finish Adv Bootcamp sections on ES6 (S16, S17) and ES2016 & 2017 (S18), then jump to the React sections
  which start at S25. The sections inbetween deal with D3 and Data Visualization, which looks awesome and I
  definitely want to come back to at some point, but for now I want to start getting into React.
  - Finish JS Weird Parts course, to help solidify JavaScript understanding. From there, maybe look into
  other 'advanced' resources I've read about, like YDKJS or Eloquent JS.
  - Start Wes Bos JS30 course. Short daily projects

===== 11.14 =====

- Harvard CS50: Week 6 Lecture
Watched first half, introduction to Python. How languages 'evolve' over time, C -> JavaScript -> Python

- Adv Bootcamp
  - Skipped S16, which was a coding project. Didn't have the mental capacity for tackling a full project.
  Will definitely come back to.
  - Started S17: ES2015 part 2. Covered classes & inheritance.

- Personal Projects:
  - Spent about an hour on my fishing app. It's been awhile since I did any work on it, so spent some
  time re-familiarizing myself, and then did some refactoring. Took out the 'river sections' and 'comments'
  for now (model schemas, routes, views), since it just adds a lot of unnecessary clutter right now. Want to
  focus just on core features, and then I can add those functionalities back in later.

===== 11.15 =====

- React Complete Course
  - Although React is covered in the Advanced Bootcamp course, the first couple lectures on it were really
  underwhelming. The instructor who teaches it (not Colt for React) is clearly smart, but doesn't seem to be
  a very good teacher. Lots of stuff kinda glossed over, or flat out skipped. Read through the course reviews and
  found lots of others who were disappointed by the React section. So, ended up buying a full new course
  dedicated to React.


===== 11.17 =====
  - React S3: Base Features & Syntax
    - Folder structure, Component basics, JSX, high-level props & state
    - Built basic React app where text field updates to match input text field

===== 11.19 =====
  - React S4: Working with Lists & Conditionals
    - Refactored code from S3 to loop through 'Person's and print out a component for each,
    rather than having all 3 hardcoded.
    - Added a toggle button that shows/hides the div containing all persons. Added a property
    to state to determine if we showPersons, then added conditional logic to decide whether to print out <Person>
    components. (Not the best explanation).

    ** Definitely want to practice more with ES6, specifically arrow functions, 'this', and the ...spread operator.
    These are getting used a lot, and I feel like I sort of understand but not as much as I should.

    - Spent 15-20 minutes answering a few questions on r/learnjavascript

===== 11.20 =====
  - JavaScript30: Day 1 completed

===== 12.04 =====
Took some time off, was busy with work & social committments,
and then visiting family for Thanksgiving. Back now, and ready to get back into it!

  - React S5: Styling Components & Elements
    - Radium for dynamic styling, pseudoselectors & media queries
    - CSS Modules, went through 'npm eject' and edited webpack config
        files in order to enable CSS Module-scope. Apparently this process
        isn't necessary anymore with newer versions of React

  - React S6: Debugging react
    - Installed chome extension React Developer Tools, shows React debugger in Chrome Dev Tools now
    - ErrorBoundary's

  - Personal Projects:
      - Fish App:
          - Trying to make a "Dashboard" on the main page, which shows the 10-day forecast, flow rate, and last stocking for
            each river. Thought this would be easy, since I already pull all this data for each of the rivers. However, I pull
            that data via middleware when accessing the show route, so have to finagle the code a bit so that it also pulls
            when viewing the root index route.
      - SDL Controller:
          - Haven't worked much on this for awhile. Getting the ball rolling again.

===== 12.05 =====
  - React S7: Diving Deeper into Components & React Internals
    - Refactoring prior tutorial code
    - Splitting app into components
    - Stateless vs. Stateful components
    - Component lifecycle
        - Creation lifecycle
        - Update lifecycle
    - Higher-order components
    - validating props


===== 12.08 =====
Made solid progress on my drone law scraper program. After running an API call to OpenStates and
returning a list of laws, the program now successfully queries the WordPress API and compares OSID #'s.
In other words, the scraper now automatically checks which laws are 'new', vs. which laws are already
present on the website.

Right now the code works, but is in bad shape. Need to re-visit promises. Code currently makes use
of multiple setTimeout() functions, which I know is bad practice. I've looked at promises before,
specifically for this project, but I guess I didn't internalize it as well as I thought. Definitely
need to do another promises deep-dive.

===== 12.14 =====
Have been making progress the past few days, but have gotten a bit lazy at updating this journal.
  - React Course
    - Started the 'Burger Builder' section, where we're starting work on the course's final project.
  - Drone Law Scraper:
    - Been making a lot of progress on the 'auto-update' functionality for StateDroneLaw.com. Ran into a bug today
    though, in that the 'show laws' code no longer works. This is because I had to add some code to my functions.php
    in order to let me query WordPress for an ACF value. Need to re-visit that code to see how to fix it.

===== 12.15 =====
  - Course: JavaScript Weird Part
    - Went through closures in-depth, and how they commonly get used by "function factories" within frameworks.
    - Started on call() bind() apply()

===== 12.16 =====
  - JS Weird Parts
    - call, bind apply, and how they're used in function borrowing and function currying.
    - Looked at functional programming.
    - Finished section 4, which was a long one.

===== 12.17 =====
  - JS Weird Parts
    - Objects, classical inheritance vs. prototypal inheritance
    - Looked closely at prototypes and how they work, __proto__, prototype chain
    - Everything (aside from primitives) is an object at its core.
        - Arrays have an empty array prototype, which then has a base object prototype
        - Same for functions
        - Prototype Chain is why arrays/functions/objects all have access to certain methods/properties
          - i.e. All functions have access to call, bind, apply. Arrays have access to pop, slice, indexOf, etc.
          - This is because those methods are attached to the base function/array prototype
    - Started Section 6, on Objects.
      - 'new' keyword and how it works.

===== 12.23 =====
  - JS Weird Parts
    - Finished the 'Building Objects' section.
      - use of function constructors and using the .prototype, performance gains on putting methods on
        prototype instead of in the actual constructor.
      - 'new' keyword and how it creates an Object, even if you're using 'new Array' or 'new Date'
      - object.create()
      - ES6 and introduction of classes
