---
date: 2023-01-09T04:00:00.000Z
title: Site Update Jan 9th
excerpt: Website update.
categories:
  - meta-tags
  - blog-post
  - site-update
---

### The Technical 

I've been digging into why the social media links are not rendering out correctly.
I noticed sharing links on social media has varying results. 
First I decided to compare the meta tags I grabbed from somewhere online to GitHubs;

Starting with what I originally had

```html
	<meta name="description" content={excerpt} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={siteLink + data.path} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:image" content="{siteLink}/polybg/1200x630/{slugify(title)}.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="{siteLink}/polybg/800x418/{slugify(title)}.svg" />
	<meta property="twitter:url" content={siteLink + data.path} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={excerpt} />
	<meta property="twitter:image" content="{siteLink}/polybg/1200x630/{slugify(title)}.svg" />
	<meta name="twitter:image:alt" content={title} />
```

and after

```html
    <!-- Open Graph / Facebook -->
	<meta property="og:description" content="{excerpt}" />
	<meta property="og:image:alt" content="{excerpt}" />
	<meta property="og:image:height" content="600" />
	<meta property="og:image:width" content="1200" />
    <meta property="og:image" content="{siteLink}/polybg/1200x630/{slugify(title)}.svg" />

    <meta property="og:site_name" content="Jessy.Co" />
	<meta property="og:title" content="{title}" />
	<meta property="og:type" content="object" />
	<meta property="og:url" content="{siteLink + data.path}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content="{excerpt}" />
	<meta name="twitter:image:src" content="{siteLink}/polybg/800x418/{slugify(title)}.svg" />
	<meta name="twitter:site" content="@jessycormier" />
	<meta name="twitter:creator" content="@jessycormier" />
	<meta name="twitter:title" content="{title}" />

	<meta name="twitter:url" content={siteLink + data.path} />
	<meta name="twitter:image:alt" content={title} />
```

Seeing the difference from what GitHub is using vs what I was using gave me a shortcut to what might be missing.

Here's links for you if interested: 
- Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
- Twitter card validated: https://cards-dev.twitter.com/validator
- Facebook: https://developers.facebook.com/docs/sharing/webmasters/
- Hey Meta to check tags: https://www.heymeta.com/


After this I still have an issue which interestingly was shown to me via twitters card validator, I have a robot.txt which blocks the particular path I use to generate the poly backgrounds!
Facebook(meta) doesn't seem to respect that detail but twitter does and prevents the card from generating.

#### Post Tags

I've updated the post tags to be lowercase and no spaces (using dashes instead).
Why? Simply I can't handle having url encoding appear in my URLs if I can handle it and this change removes that from happening without code changes.

### The Future

I have some ideas I'd like to explore with this site so please stay tuned.
I've had a lot of small project ideas sitting for years now but feel it's time to start giving light to some of them, as well as showcase things I've pushed out there live, share code and experiences along the path.
This is a kind of learning in the public if you will where it's raw but here to help. I hope to also improve my writing skills along the way; so here's to that effort! 

See you next time and thanks for stopping by.