---
date: 2023-01-08T04:00:00.000Z
title: Site Update Jan 8th
excerpt: Website update includes updated logo and more.
categories:
  - blog-post
  - site-update
---

<script lang="ts">
    import Logo from '../lib/components/layout/Logo.svelte';
</script>

> Bug fixes and performance improvements.
-- Every major app developer update notes.

Jokes aside, this has a bunch of updates to the design of the site. The logo, social media share, some tests with animated titles, and lots of tweaks in the code.

## Logo Component

I've created a SVG version of the logo that I had before. What prompted me to do this was seeing the logo which was text based break lines on a mobile device (Android Pixel 4XL to be specific).

The logo was created just to give some kind of fluidity in the branding of the site. I had some random AI generated image before for fun but it didn't help create a solid cohesive experience.

With the logo being an SVG now in svelte I can componentize it and control it a bit which has been fun.

<Logo 
    svgClasses="fill-black dark:fill-white w-10 h-10 transition-all group " 
    jClasses="group-hover:animate-bounce delay-150  from-indigo-500 via-purple-500 to-amber-500 bg-gradient-to-t"
    cClasses="group-hover:animate-bounce delay-300"
    rbClasses="group-hover:animate-bounce delay-500"
    lbClasses="group-hover:animate-bounce delay-700"
/> - try changing dark/light mode for extra effects <small>(might not be possible on mobile sorry)</small>.
<br>
<Logo  svgClasses="fill-black dark:fill-white w-10 h-10 transition-all hover:animate-spin"  /> - Hover over with mouse to spin. (maybe click and hold with mobile?)

<br><br>

<small>*Note: any component shown in articles may become broken in the future if I don't update the posts to support older versions.*</small>

<br><br>

I've added the update for the titles most likely wont stay just messing around with learning components and how Tailwind works with them.

## AnimatedText component
I've added a component `AniamtedText` which is what post titles are using (at the time of writing). I got the tips from 


```js
    animation: {
        'text': 'text 30s ease infinite',
    },
    keyframes: {
        'text': {
            '0%, 100%': {
                'background-size': '2000% 2000%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size': '2000% 2000%',
                'background-position': 'right center'
            }
        },
    }
},
```

and a svelte component

```svelte
<script lang="ts">
    const css = 'animate-text bg-clip-text text-transparent';
    export let cssClasses = '';
    export let colorFrom = 'from-blue-500';
    export let colorVia = 'via-indigo-500';
    export let colorTo = 'to-amber-600';
</script>
<span
	class="bg-gradient-to-r {colorFrom} {colorVia} {colorTo} {css} {cssClasses}">
	<slot />
</span>
```

This component lets you throw in extra CSS classes to change font-size or whatever or adjust the from/via/to colors etc. It's got something good enough for now for this site.

## All the other things

This update touched a bunch of files, moving them for better organization and tweaks for better layout or accessibility. I found a wonderful article by Daniela; where they go over their experience trying to make their site more accessible and it's been a great guide for me. https://sericaia.me/posts/2020-06-08/how-i-fixed-accessibility-on-my-website-and-how-you-can-fix-yours

I noticed an issue when viewing the site on mobile phones where the font was not rendering. I use this font https://rsms.me/inter/ on the site which at the time I got from Google and converted it to the a modern format. This update includes a the variants directly from the creator Rasmus Andersson. Do check out that site, it's got a really great setup to showcase the front. I love the "lab"!

I'm sure I'm forgetting all the details but this is it for now.

---

p.s. one of my new years goals is to write so to take on that challenge I figured updating my personal site and sharing things I learn for work or personal things along the way would be a great way to do that. I hope you find something of value in the future posts and I hope I can find better ways to express creatively the things I want. See you next time.