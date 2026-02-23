import type { Resource } from "@/types/resources";

/**
 * TODO
 * - Add more resources
 * - Add categories and tags for better filtering
 * - Consider adding a "difficulty" level for exercises
 * - Add user ratings or reviews for each resource
 * 
 * 
 * 
 *  GIT тренажеры
    https://www.git-tower.com/
    https://learngitbranching.js.org/
    https://githowto.com/
    https://ohshitgit.com/
    https://git.gaozih.com/
    https://www.conventionalcommits.org/

    CSS тренажеры
    https://flexboxfroggy.com/
    https://cssgridgarden.com/
    https://cssbattle.dev/
    https://flukeout.github.io/
    https://codingfantasy.com/
    http://www.flexboxdefense.com/
    https://knightsoftheflexboxtable.com/
    https://100dayscss.com/

    JS тренажеры
    https://leetcode.com/
    https://www.codewars.com/
    https://javascript30.com/
    https://www.jschallenger.com/

    Комплексные курсы
    https://www.frontendmentor.io/
    https://www.freecodecamp.org/
    https://www.w3schools.com/
    https://internetingishard.netlify.app/
    https://www.theodinproject.com/
    https://fullstackopen.com/

    Готовые решения
    https://codyhouse.co/
    https://tympanus.net/
    https://uiverse.io/
    https://www.30secondsofcode.org/
    https://publicapis.io/

    Утилиты:
    https://animista.net/
    https://cssgradient.io/
    https://neumorphism.io/
    https://getwaves.io/
    https://grid.layoutit.com/
    https://bennettfeely.com/
    https://css.glass/
    https://huemint.com/
    https://flexboxpatterns.com/
    https://moderncss.dev/
    https://squoosh.app/
    https://www.svgrepo.com/
    https://www.svgviewer.dev/
    https://jsonformatter.org/
    https://specificity.keegan.st/
    https://cssgenerator.pl/
    https://www.cssportal.com/
    https://css-tricks.com/
    https://caniuse.com/
    https://www.caniemail.com/
    https://www.a11yproject.com/
    https://jsonplaceholder.typicode.com/

    Теория
    https://coursehunter.net/
    https://www.hackfrontend.com/
    https://javascript.info/
    https://edabit.com/
    https://developer.mozilla.org/
    https://roadmap.sh/
    https://doka.guide/
    https://web.dev/
    https://eloquentjavascript.net/
    https://www.patterns.dev/
    https://inclusive-components.design/
    https://http.dev/

    Лайвкодинг
    https://stackblitz.com/
    https://codeshare.io/
    https://play.tailwindcss.com/
    https://playcode.io/
    https://runjs.app/play
    https://jsfiddle.net/

    Бэк и БД
    https://sqlbolt.com/
    https://learn.mongodb.com/
    https://sqlzoo.net/
    https://selectstarsql.com/
    https://mystery.knightlab.com/
    https://github.com/goldbergyoni/nodebestpractices
    https://www.db-fiddle.com/
    https://bigfrontend.dev/
    https://cssgrid-generator.netlify.app/
    https://cssgridgenerator.io/
    https://devdocs.io/
    https://overapi.com/
    https://devhints.io/
    https://quickref.me/
    https://www.learn-js.org/
    https://realfavicongenerator.net/
    https://favicon.io/
    https://hoppscotch.io/
    https://www.postman.com/
    https://regex101.com/
    https://html5book.ru/
    https://regex-generator.olafneumann.org/
 */
export const resources: Resource[] = [
  {
    id: "mdn-html",
    title: "MDN HTML Documentation",
    description: "The definitive source for HTML documentation and tutorials.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: "HTML",
    type: "Documentation",
    tags: ["Reference", "Beginner", "Official"],
  },
  {
    id: "css-tricks",
    title: "CSS-Tricks",
    description:
      "A website about websites. Excellent for deep dives into CSS layouts and modern techniques.",
    url: "https://css-tricks.com",
    category: "CSS",
    type: "Guide",
    tags: ["Articles", "Advanced", "Layout"],
  },
  {
    id: "javascript-info",
    title: "The Modern JavaScript Tutorial",
    description:
      "From the basics to advanced topics with simple, but detailed explanations.",
    url: "https://javascript.info",
    category: "JS",
    type: "Guide",
    tags: ["Comprehensive", "Deep Dive"],
  },
  {
    id: "flexbox-froggy",
    title: "Flexbox Froggy",
    description:
      "A game for learning CSS flexbox by helping Froggy and friends.",
    url: "https://flexboxfroggy.com",
    category: "CSS",
    type: "Exercise",
    tags: ["Game", "Interactive", "Flexbox"],
  },
  {
    id: "grid-garden",
    title: "Grid Garden",
    description: "Learn CSS Grid by writing code to grow your carrot garden.",
    url: "https://cssgridgarden.com",
    category: "CSS",
    type: "Exercise",
    tags: ["Game", "Interactive", "Grid"],
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    description:
      "Interactive coding platform with thousands of hours of free curriculum.",
    url: "https://www.freecodecamp.org",
    category: "General",
    type: "Exercise",
    tags: ["Certification", "Full Stack", "Community"],
  },
  {
    id: "web-dev",
    title: "web.dev",
    description:
      "Google's platform for web developers to learn about performance, accessibility, and modern web APIs.",
    url: "https://web.dev",
    category: "General",
    type: "Guide",
    tags: ["Performance", "Best Practices", "Google"],
  },
  {
    id: "codewars",
    title: "Codewars",
    description:
      "Improve your skills by training with others on real code challenges.",
    url: "https://www.codewars.com",
    category: "JS",
    type: "Exercise",
    tags: ["Challenges", "Problem Solving"],
  },
  {
    id: "frontend-mentor",
    title: "Frontend Mentor",
    description:
      "Improve your front-end skills by building real projects. Solve real-world HTML, CSS and JS challenges.",
    url: "https://www.frontendmentor.io",
    category: "General",
    type: "Exercise",
    tags: ["Projects", "Design", "Portfolio"],
  },
  {
    id: "javascript-30",
    title: "JavaScript 30",
    description:
      "Build 30 things in 30 days with 30 tutorials. No libraries, no frameworks.",
    url: "https://javascript30.com",
    category: "JS",
    type: "Exercise",
    tags: ["Vanilla JS", "Projects", "Video"],
  },
  {
    id: "css-reference",
    title: "CSS Reference",
    description:
      "A free visual guide to CSS. It features the most popular properties and explains them with illustrated and animated examples.",
    url: "https://cssreference.io",
    category: "CSS",
    type: "Documentation",
    tags: ["Visual", "Reference"],
  },
  {
    id: "html-reference",
    title: "HTML Reference",
    description: "A free guide to all HTML elements and attributes.",
    url: "https://htmlreference.io",
    category: "HTML",
    type: "Documentation",
    tags: ["Reference", "Visual"],
  },
];
