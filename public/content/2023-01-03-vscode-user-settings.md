---
date: 2023-01-03T04:00:00.000Z
title: My Visual Studio Code Setup
excerpt: General setup I use for user settings in Visual Studio Code.
categories:
  - vs-code
---

I've found value in finding these kinds of posts by other people online so I thought I would share my setup to maybe benefit you.

### User Settings

Here you go! this has everything for code formatting stripped out as that's a pretty big personal preference here (or project specific). 
Generally here's some of the things I tend to use now.

```json
// User/settings.json
{
    "workbench.colorTheme": "Default Dark+",
    "workbench.iconTheme": "material-icon-theme",
    "editor.rulers": [
        80,
        120
    ],
    "editor.inlineSuggest.enabled": true,
    "editor.stickyScroll.enabled": true,
    "editor.accessibilitySupport": "off",
    "workbench.editor.labelFormat": "short",
    "workbench.tree.indent": 16,
}
```

`workbench.colorTheme` 
- have to have a dark theme I havn't explored to many that I liked so I usually just stick the to the default.

`workbench.iconTheme` 
- This icon pack was very useful while doing angular development but it's full of other icons that work for pretty much everything I've worked with so it's been my go to.

`editor.rulers` 
- Following the 80 or 120 line break rule helps out when when working on a team I find. PR's are easier to review when doing side by side and not overflowing, and generally code is cleaner.

`editor.inlineSuggest.enabled` 
- Auto suggestions heck yeah save me time whenever I can get it.

`editor.stickyScroll.enabled`
- This newish feature of VScode is awesome. when scrolling down a large file with nested logic you'll have the "parent" stick on the top of the editor so you know your current context..

`workbench.editor.labelFormat` 
- This one is useful specifically for Sveltekit (or any folder route framework nextjs for example), but I find it helpful for all projects generally. It adds the files folder to the right of the filename in the tab.

`workbench.tree.indent` 
- Simply add in more or less spacing for the file structure tree, I find having a bit more space lets me easily identify files/folders more easily.

That's about it for specific user settings. 
Per project I'll have different rules setup for formatting based on my preferences but heavily consider the projects/frameworks defaults first over my own preferences.
I find by trying out different rules I gain a respect for what it solves which is knowledge growth on my part and helps me identify what may be useful for personal vs group work.


### Extensions


- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) this one took some time to fall in love with but it's become part of my core extensions. It's useful to use the random color picker for a project so you can identify quickly different projects if you have more than one open.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) until I found an option specific for html attribute brackets I had only used it for js/ts but now that I know it can be customized for html the way I like, this is a great thing to have in any project. Set it up so it doesn't auto do it on document save so you can control when it formats.
- [Random Everything](https://marketplace.visualstudio.com/items?itemName=helixquar.randomeverything) I use this mostly for the UUID generation but it has a ton of other useful things when building out demo content.
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) for building this website of course.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) I built this site using tailwindcss so using this plugin is useful to get context about tailwind like picking colors or what other things are available without having to go look everything up on the docs.
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) This one I'm still in conflict with. The saying goes don't write todos in code, but in reality sometimes this is the cleariest spot to leave information rather than externalizing it. Especially for future self. This extension makes seeing those todos really easy plus you can customize it to pick up other phrases if you want as well as colour code them when found.
- [Visual Studio Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings) I need this to function effeciently in vscode. I've used these keybindings for so long now it would be hard to switch off.

and I have a few disabled based on projects or messing around with to see if I like them. [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to name a few.


### Closing Thoughts

Generally I like to try out new things including coding practices to see how it can fit into my workflow or perhaps make teams create more managable code bases.
Keeping things close to default I think is important so it applies to a wider group of people but it's still fantastic to be able to customize as freely as we can in VS code.
I think that's what sets this IDE above a lot of other ones, it's a fantastic DX (Developer experience).