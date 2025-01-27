---

date: 2023-01-28T04:00:00.000Z
title: "Release Versioning"

author: 
  - Jessy Cormier

excerpt: versioning doesn't need to be hard, I give some feedback based on recent and past experiences with versioning.

categories:
  - blog-post
  - code-versioning
  - semantic-versioning
  - calendar-versioning

---

## My expirences with versioning

I had this come up recently at work and reminded me of some past challenges I had at a previous job. 
The project I have at work had no versioning attached to it in git repository, so I had no context as to what was released in the past only messages for Azure DevOps merges into the `main` branch. 
I could cross reference the information there and the repo but that takes time and energy to gain that context.

The simple solution for me was to add in a `changelog.md` as well as begin tagging the releases going forward. 
This project has no official version to it and previous developers reference the year as the new update. 
It's a very marketing forward type of project so this language makes sense. 
The best fit I could think of was to use something like `YYYY-MM` so this is what I did. 
I went back into the history of hte project a little bit and tagged a few previous releases like `release-2020-01`. 

Eventually I learned about a versioning system called [CalVer].
They have a great write up on many different ways to use their system to convey information in this kind of context I work with. 
This had me thinking of my previous work and how we released. 
I was working in an enterprise environment that, when releasing we had to release many projects at the same time across many area's of the platform we built.
The challenge we faced often was that we where trying to use [semantic versioning] but not all our developers had practice and experience in this across the few teams and projects. 
We had over 70 separate projects that may or may not include versioning with developers that hadn't been trained on how to identify Major, Minor vs patch type changes. 

SO, this means when it came time to release we kind of talked about a release number basing it off of the client side code and back-end versions of the api's and code bases didn't really matter. We ran into issues again and again with versioning where if a back-end product updated because of a bug then we scramble to tag the front-end repo and things just get messy this way.

For you guys if you're still out there and happen to stumble upon this article, I highly recommend taking the time to create a separation of concerns for releasing vs project versioning. I think using the [CalVer] solution for release tagging across all of the repo's would better identify over time  than trying to mix and match versions across the projects. 

One or the other solution might not be for you depending on your project, but these tools can be used to communication information across many teams or people. It can be helpful in the future if you have questions about your code like what did we release or fix since our last release.

For me I'll most likely stick with the use of [semantic versioning] for any library or pushed code however for a product release I like the idea of simplifying it. Maybe make a variation on [CalVer] and ad in a code word for that particular release.

##  Bonus

Check out this video by [Viktor Farcic] on [DevOps Toolkit] explaining the differences of a few versioning systems.


<iframe style="width: 100%; min-height:400px; height: 20vh" src="https://www.youtube.com/embed/xvPiZyx0cDc" title="Software Versioning Explained - Semantic (SemVer), Calendar (CalVer), etc." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Links

- https://nehckl0.medium.com/semver-and-calver-2-popular-software-versioning-schemes-96be80efe36
- https://openswoole.com/article/calver-and-semver
- https://sedimental.org/calver.html
- https://medium.com/@mkstz/semver-vs-calver-and-why-i-use-both-16914aeb210e
- https://news.ycombinator.com/item?id=21968327
- https://calver.org/
- https://semver.org/
- https://youtu.be/xvPiZyx0cDc

[CalVer]: https://calver.org/
[semantic versioning]: https://semver.org/
[DevOps Toolkit]: https://www.youtube.com/@DevOpsToolkit
[Viktor Farcic]: https://twitter.com/vfarcic