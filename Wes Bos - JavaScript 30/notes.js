Day 1 - Drum Kit

New stuff:
- HTML <kbd> and <audio> tags
- - <audio> has audio.play() javascript method
- use of "data-" for custom HTML attributes
- 'transitionend' event listener, triggers when CSS transition on given element is complete

Day 2 - CSS Clock

New stuff:
- Animations via CSS transform/rotate. Cubic bezier

Day 3 - CSS Variables & JS
- CSS has support for variables now. Better than SASS variables, since SASS variables are defined at compile time, whereas CSS native variables can be modified via JS.

- Variables have to be defined on an HTML element, or global via :root{}
i.e.:
      <style>
        :root{
          --base: #ffc600;
          --spacing: 10px;
          --blur: 10px;
        }

        img{
          padding: var(--spacing);
        }
      </style>

Variables defined in :root, then applied to image tags. Double-dash convention for variables, makes it backwards-compatiable with older browsers.

New: css property filter:blur to blur image.

document.querySelectorAll => returns node list, rather than actual array (review). Can still use forEach() on node list.
