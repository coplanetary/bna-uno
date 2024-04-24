# coPlanetary Collab Platforms

## ✨ coPla ⊆ coSys ✨

Before we dive into code, let's visualize the structure:

- **Nx**: The backbone of the project repo, providing workspace management, tooling, and structure.
- **Astro**: For blazing-fast, content-focused experiences.
- **Analog**: To streamline data access and API interactions.
- **SvelteKit**: Delivering rich, interactive app-like web experiences.
- **Tauri**: Enabling desktop features, enhancing the apps' reach.
- **Hono | Uno**: Reusable business logic and utilities shared across the apps.

## Your Stellar Development Suite!

This project houses a constellation of tools to craft amazing web experiences! Let's explore each one and see how they'll help you reach for the stars:

**astrovelte** (a Tauri + SvelteKit app):
This powerful duo combines the speed and flexibility of Astro with the rich interactivity of SvelteKit. Think of it as a rocket ship, ready to propel your desktop applications into the future!

> To build apps sleek, many or 1 grand,
> 
> Astrovelte takes you by the hand!

**blazin-fastro** (an Astro app):
This app lives up to its name! Astro's lightning-fast performance makes it ideal for static content or content that updates infrequently. Think of it as a nimble spacecraft, zipping through the web with blazing speed.

> Need blazing-fast content to show?
> 
> Blazin-fastro, the anarchro-way to go!

**fastronomy** (a SvelteKit + Svelte 5 component library):
This library is your personal constellation of reusable components, built with the power of Svelte 5. It'll help you build UIs that are not only beautiful but also incredibly reactive. Imagine it as a toolbox filled with cosmic building blocks for your web applications.

> For reactive features, don't be a dummy,
> 
> Fastronomy's components make React roll into a mummy!

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Nx plugins and code generators

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://github.com/coplanetary)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@risavkarna)
- [Follow us on Twitter](https://twitter.com/risavkarna)

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>
