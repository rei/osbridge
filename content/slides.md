title: What's this ABOUT anyway?
notes: |
    - Public affairs would like me to say something to the effect of...
    - "The views expressed in this presentation are those of me, personally, and do not necessarily reﬂect the views of REI"

- A story of an on-going journey

- Preparing a large cooperative for open source contributions

- From one software engineer's perspective

---

title: What is this presentation NOT
notes: |
    - Start by setting expectations
    - --
    - Not an instruction manual, NOR
    - Not a story with a conclusion, ongoing journey
    - --
    - Short!
    - "If you didn't see it in the presentation description..."
    - Didn't get as far as I would have liked before the conference
    - Wheels of bureaucracy turn slowly
    - Open up to share journeys implementing open source at your organizations
    - Successes, challenges, advice, etc.

- An instruction manual

- A story with a conclusion

- Very long :(

---

title: Hats!
notes: |
    - Front End Software Developer for REI.com
    - Among ~40 software developers, SDETs, and manual testers
    - --
    - Platform / DevOps: "Front-End of the Back End"
    - Unique FED: Dislike display layer, love accessibility/ubiquity + being close to the user
    - --
    - Build system
    - "Help the FEDS have things that have existed in most programming languages since the 60s"
    - Dependency management, modularity, unit testing, none of which
    - "You could say I help front-end languages almost like a real programming language!"
    - --
    - Visualization: Code stability, coverage, performance
    - Measure how changes affect codebase
    - --
    - "Maybe you don't need jQuery on EVERY PAGE"
    - "Front-end is hard because front-end is easy (to do whatever)"
    - My job to inject CS principles and engineering
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

  - Organization, architecture, frameworks

- Hiring

---

title: Open Source Background
#TODO: Build parent lists, strongify parent list titles
notes: |
    - Since I'm @osbridge, figured I should tell you a little re: OSS background
    - Long time supporter of OSS
    - Personally, I hate the idea of being at the mercy of a for-profit company
    - "I say that as I'm presenting from a MacBook..."
    - I love the freedom to hack, learn how something works
    - --
    - OSL
    - "How many of you are familiar with the OSL?"
    - Great org, lucky to get in
    - Learned more about software engineering than getting a CS degree
    - Principle developer on TouchScreen (HTML5, Kiosk), Ganeti Web Manager (Ganeti virtual machine cluster management)
    - --
    - Boeing: Contributed to the internal "OSS culture"
    - Difficult to even consume OSS
    - OSS Toolkit (provide OSS for employees)
    - GitLab (OSS development methodologies)
    - "Though efforts not public, like to think I made a difference for employees"
    - --
    - REI: More freedom
    - Personal crusade to bring OSS contributions -> cooperative
    - This presentation is part of that goal

[OSU Open Source Lab](http://osuosl.org/)

  - Cut my software engineering teeth

  - [TouchScreen](https://code.osuosl.org/projects/touchscreen), [Ganeti Web Manager](https://code.osuosl.org/projects/ganeti-webmgr)

Boeing

  - "Internal Open Source"

  - OSS Toolkit, [GitLab](https://www.gitlab.com/)

REI?

  - Speak at open source conferences ;-)

  - Bring open source contributions to the cooperative

---

title: The Journey Begins
subtitle: Software Engineer Motivation
notes: |
    - Started with OSS-savvy engineers, who believe as we do
    - REI history proprietary software, company dependence part of the business model
    - Adobe worst offender: Purposefully crippled software and documentation so we pay for "training"
    - --
    - Infrastructure runs on OSS: Java, Jenkins, Apache, Maven, Node + hundreds of other libraries and tools
    - --
    - Hippy reasons: Passionate people who want to give back
    - Culture of environmental stewardship / community service extends -> software
    - --
    - "given enough eyeballs, all bugs are shallow" - Linus's Law
    - Need to find/fix bugs anyway, better to find them sooner
    - Write higher quality code if know your name is publicly attached to it
    - --
    - Let communiy hack!
    - Engineers are busy, don't have time do do everything we want
    - "What can the public come up with given these APIs?"
    - --
    - More selfish reasons...
    - Reputation. "Oh, you're just a WEB DEV who works on a WEB SITE" feel like I have to defend my honor
    - Attracting devs: Many devs don't know REI develops its own software.
    - We want to play! Want to participate

- Open source software runs our infrastructure

- We're a culture of tree-huggers that want to give back

- Want to increase code quality

- Let community hack and remix

- Dev cred

---

title: Into the Shadow
subtitle: Covert OSS Community
notes: |
    - Needed something NOW while we waited
    - Start with style guides (AirBnB)
    - Documentation (re: style guide) deemed innocuous by management
    - --
    - Upstream patches
    - Istanbul (code coverage), NPM, Nexus, Maven
    - --
    - Loophole: Personal projects
    - REI all about privacy ("none of business")

- [github.com/reidev](https://github.com/reidev)

- Code style guides ([JS](https://github.com/reidev/js-style-guide), [HTML](https://github.com/reidev/markup-style-guide), [CSS](https://github.com/reidev/stylesheet-style-guide))

- Upstream patches ([Istanbul](https://github.com/reidev/istanbul), NPM, Nexus, Maven, etc.)

- Personal projects ([gulp-chug](https://github.com/robatron/gulp-chug))

---

title: Archeological Evidence
subtitle: Ghosts of the past
notes: |
    - Working at REI for 15 months (yes, still in months, like the age of a baby <2 years)
    - --
    - Ever dig through code and find ghostly footprints?
    - "Oh god, someone's tried this before!"
    - --
    - Intended to document our APIs/SOA architecture
    - Security shut it down (security through obsurity)
    - Sitting on the edge of our network, blocked by a single firewall filter
    - --
    - Engineering blog: blog, developer profiles
    - Wrapped up in code.rei.com
    - --
    - Learnings helped adjust approach
    - APIs/SOA scary for security. FED libs not so much?

- code.rei.com

- Engineering blog

- Helped shape our approach

---

title: Quest for Legitimacy
subtitle: Management Heads the Political Battle
notes: |
    - Direct management supportive
    - Many problems, hardest part is political, not technical
    - --
    - Began by convincing upper-management
    - Through director-level
    - Talent acquisition, core value alignment (stewardship/community service)
    - Go for it! Just convince gatekeepers (legal, security, etc.)
    - --
    - Meet with OSL (graciously agreed)
    - Lots of experience with the political side of OSS
    - Concern: Liability (most OSS licences)
    - Concern: Competitive advantage? (We're a retailer, FED code accessable to the curious)
    - "Besides that, only advantages"
    - Community management: Eventually, if things get popular...
    - Already have a CI workflow, with PRs and reviews
    - --
    - Meet with legal
    - Need time to research

- Convince upper-management

- Meet with the OSU Open Source Lab for guidance

    - Legal Liability?

    - Competitive advantage?

    - Community management

- Brief meeting with Legal

    - "We'll get back to you"

---

title: Coming Soon
subtitle: Next Steps
notes: |
    - Thats as far as we got before the conference!
    - Wanted to get further, but accepted the risk
    - Figured it might be helpful to others, network
    - --
    - After Legal research, present our case
    - Motivation for "yes" unclear
    - --
    - Projects!
    - Actively writing projects in an OSS way

- Formal meeting with legal and security

- Projects behind the floodgates

    - Atless     - JavaScript and CSS source map stream transformer
    - Rev        - MD5 cache-buster for front-end resources
    - 3POC       - Markup composition and inheritance pattern for JSP
    - Shoelace   - Style framework
    - Scenery    - HTML5 presentation framework (running this presentation)

---

title: Your Turn
subtitle: What are your experiences fighting the good fight?
notes: |
    - That's all I have so far
    - Wanted to take this time to open it up to you to share your experiences

- Successes?

- Challenges?

- Advice?
