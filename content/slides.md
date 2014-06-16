title: Introduction

- Titles are formatted as Open Sans with bold applied and font size is set at 45
- Title capitalization is title case
    - Subtitle capitalization is title case
- Subtitle capitalization is title case
- Titles and subtitles should never have a period at the end

---

title: Slide with Bullets that Build
subtitle: Subtitle Placeholder
build_lists: true

A list where items build:

- Pressing 'h' highlights code snippets
- Pressing 'p' toggles speaker notes (if they're on the current slide)
- Pressing 'f' toggles fullscreen viewing
- Pressing 'w' toggles widescreen
- Pressing 'o' toggles overview mode
- Pressing 'ESC' toggles off these goodies

---

title: Slide with Bullets that Build AND Fade
build_fade_lists: true

Another list that builds, but items fade as they build:

- Hover over me!
- Hover over me!
- Hover over me!

---

title: Slide with Smaller Font
content_class: smaller

- All [links](http://google.com) open in new tabs.
- To change that this, add <code>target="_self"</code> to the link.

---

title:      Code
subtitle:   Segue Slide Subtitle Placeholder
class:      segue dark nobackground

---

title: Slide with Code

Press 'h' to highlight important sections of code (wrapped in &lt;b&gt;).

<pre class="prettyprint" data-lang="javascript">
    // Say hello world until the user starts questioning
    // the meaningfulness of their existence.
    function helloWorld( world ) {
        <b>for (var i = 42; --i >= 0;) {
            alert('Hello ' + String(world));
        }</b>
    }
</pre>

---

title:      Presenter Mode
subtitle:   Segue Slide Subtitle Placeholder
class:      segue dark nobackground

---

title: Slide with Speaker Notes
notes: |
    - Point I wanted to make #1
    - Point I wanted to make #2
    - Point I wanted to make #3
    - Example [link](http://example.com) in notes.

Press 'p' to toggle speaker notes.

---

title: Presenter Mode

Add <a href="?presentme=true" target="_self">`?presentme=true`</a> to the URL
to enabled presenter mode. This setting is sticky, meaning refreshing the page
will persist presenter mode.

Hit <a href="?presentme=false" target="_self">`?presentme=false`</a> to disable
presenter mode.

---

title:      Images
subtitle:   Segue Slide Subtitle Placeholder
class:      segue dark nobackground

---

title: Slide with Image

<img src="images/chart.png" class="reflect" alt="Description" title="Description">
<footer class="source">source: place source info here</footer>

---

title: Slide with Image (centered horiz/vert)
content_class: flexbox vcenter

<img src="images/barchart.png" alt="Description" title="Description">
<footer class="source">source: place source info here</footer>

---

title:      Tables
subtitle:   Segue Slide Subtitle Placeholder
class:      segue dark nobackground

---

title: Slide with Table

<table>
<tr>
  <th></th><th>Column 1</th><th>Column 2</th><th>Column 3</th><th>Column 4</th>
</tr>
<tr>
  <td>Row 1</td><td>placeholder</td><td class="highlight">placeholder</td><td>placeholder</td><td>placeholder</td>
</tr>
<tr>
  <td>Row 2</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
</tr>
<tr>
  <td>Row 3</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
</tr>
<tr>
  <td>Row 4</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
</tr>
<tr>
  <td>Row 5</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td>
</tr>
</table>
