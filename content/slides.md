title: What's this ABOUT anyway?
notes: |
    - Public affairs
    - "The views expressed in this presentation are those of Rob McGuire-Dale, and do not necessarily reﬂect the views of REI"

- A story of an on-going journey

- Preparing a large cooperative for open source contributions

- From one software engineer's perspective

---

title: What is this presentation NOT
notes: |
    - Start by setting expectations
    - --
    - Not an instruction manual
    - Not a story with a conclusion, ongoing journey
    - --
    - Short!
    - "If you didn't see it in the presentation description..."
    - Wheels of bureaucracy turn slowly
    - Open it up to share your stories, successes, challenges, advice, etc.

- An instruction manual

- A story with a conclusion

- Very long :(

---

title: Hats!
notes: |
    - Front End Software Developer for REI.com
    - Among ~40 software developers, SDETs, and manual testers
    - --
    - DevOps, platform: "Front-End of the Back End"
    - Unique FED: Dislike display layer, love accessibility/ubiquity + being close to the user
    - --
    - Build system: dependency management, modularity, unit testing
    - Thing that have existed in most programming languages since the 60s
    - "Front-end languages almost like a real programming language!"
    - --
    - Visualization: Code stability, coverage, performance
    - --
    - "Maybe you don't need jQuery on EVERY PAGE"
    - --
    - Hiring: Interview exercise, not just code skills
    - Software engineering skills (commit const), prioritization under time constraints, etc
    - "Let ME in, had to raise the bar"

<img
  style="
    width:    250px;
    position: absolute;
    right:    50px;
    top:      50px"
  src='images/hat.jpg'>

- Front End Software Developer for REI.com

- Platform Team, DevOps

  - Build System ( Node.js + NPM + gulp )

  - Statistics, Visualization, Dashboarding

  - Architecture and Frameworks

- Hiring

---

title: Open Source Background

<!-- Asked to provide OSS background -->

<!-- <img style="
    width:    250px;
    position: absolute;
    right:    50px;
    top:      50px"
  src="https://www.python.org/images/infrastructure/osl.png">

<img style="
    width:    275px;
    position: absolute;
    right:    50px;
    top:      200px"
  src="http://www.parabolicarc.com/wp-content/uploads/2009/04/boeing_logo.jpg">

<img style="
    width:    300px;
    position: absolute;
    right:    50px;
    top:      350px"
  src="http://activeinboston.com/wp-content/uploads/2013/12/REI-Logo.png"> -->

OSU Open Source Lab

  <!-- Long time supporter of open source, lucky to get in -->

  - Cut my software engineering teeth

    <!-- Learned more than in college -->

  - [TouchScreen](https://code.osuosl.org/projects/touchscreen)

    <!-- Kiosk Software, Outside OSL Data Center -->

  - [Ganeti Web Manager](https://code.osuosl.org/projects/ganeti-webmgr)

    <!-- Mange Google's Ganeti virtual machine clusters via the web -->

Boeing

  - Internal "GitHub" with [GitLab](https://www.gitlab.com/)

    <!-- Internal "open source" community organization -->

REI?

  <!-- Personal crusade to bring open source to the cooperative -->

  - Speak at open source conferences

  - Bring open source contributions to the cooperative

      <!-- What I'm here to talk about -->

---

title: The Journey Begins
subtitle: OSS-Savvy Engineers + Supportive Management

<!--
    - OSS - savvy engineers

    - Been working with the OSS community for many years
-->

- We depend on open source; It runs our infrastructure.

    <!-- Java, Jenkins, Apache, Maven, Node + hundreds of other libraries and tools -->

- We want to give back

    <!--
        - Hippy reasons: Passionate people

        - Culture of environmental stewardship and community service (extend -> software)
    -->

- Increase code quality

    <!--
        - "given enough eyeballs, all bugs are shallow" - Linus's Law (need to find/fix bugs anyway, better to find them sooner)

        - Higher quality code if know your name is publicly attached to it
    -->

- Let community hack and remix

    <!--
        - Engineers are busy

        - What can the public come up with given these APIs?
    -->

- Dev cred

    <!--
        - More selfish reasons...

        - Reputation. "Oh, you're a WEB DEV" feel like I have to defend my honor

        - Attracting devs. (Many devs don't know REI develops its own software.)

        - We want to play!
    -->

---

title: Archeological Evidence
subtitle: Ghosts of the past

<!--
    - Working at REI for 15 months (yes, still in months)

    - Ever dig through code and find ghostly footprints?

    - Oh god, someone's tried this before!
-->

- code.rei.com

    <!--
        - Intended to document our APIs/SOA architecture

        - Security shut it down (security through obsurity)

        - Sitting on the edge of our network, blocked by a single firewall filter
    -->

- Engineering blog

    <!--
        - Engineers write blog posts re: solved problems
    -->

---

title: Into the Shadow
subtitle: Covert OSS Community

- [github.com/reidev](https://github.com/reidev)

- Code style guides ([JS](https://github.com/reidev/js-style-guide), [HTML](https://github.com/reidev/markup-style-guide), [CSS](https://github.com/reidev/stylesheet-style-guide))

    <!--
        - AirBnB fork, JS style guide

        - documentation deemed safe by management
    -->

- Upstream patches ([Istanbul](https://github.com/reidev/istanbul))

    <!--
        - Istanbul (code coverage)

        - NPM tools

        - Gulp
    -->

- Personal projects ([gulp-chug](https://github.com/robatron/gulp-chug))

    <!--
        - gulp-chug
    -->

---

title: Quest for Legitimacy
subtitle: Management Heads the Political Battle

<!-- As with many development problems at REI, the hardest part is political, not technical -->

- Convince upper-management

    <!--
        - Through the director level

        - Agree it aligns with REI's core values of stewardship and community service

        - Green light
    -->

- Meet with the OSU Open Source Lab for guidence

     <!--
         - Gracious
     -->

    - Legal Liability?

        <!-- Most OSS licences release liability -->

    - Competitive advantage?

        <!--
            - Retailer

            - Front-end code accessable for the curious anyway
        -->

    - Public contribution process

        <!--
            - Already use Git, Stash, Jenkins, etc.
        -->

    - Community management

        <!--
            - PR guidelines
        -->

---

title: Coming Soon
subtitle: Next Steps

- Meeting with legal and security

    <!--
        - Initial pitch

        - back to us in a couple weeks
    -->

- Projects behind the floodgates

    - Atless     - JavaScript and CSS source map stream transformer
    - Rev        - MD5 cache-buster for front-end resources
    - 3POC       - Markup composition and inheritance pattern for JSP
    - Shoelace   - Style framework
    - Scenery    - HTML5 presentation framework (running this presentation)

---

title: Your Turn
subtitle: What are your experiences fighting the good fight?

- Successes?

- Challenges?

- Advice?
