11.09
- Course: Advanced Bootcamp
  - Topic: S12 - Object Oriented Programming in JS
    -




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
