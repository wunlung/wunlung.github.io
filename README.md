# Wun Lung Wong — personal website

This is a Markdown-first personal website built with Jekyll and hosted by GitHub Pages. It presents my professional story, evergreen project case studies, long-form writing, short notes, and small interactive experiments.

The site is intentionally simple: content lives in Markdown, Git records every revision, and pushing to `main` publishes the result.

## The site’s purpose

The central idea is:

> I build human-centred AI systems, lead high-performing technical teams, and turn difficult ideas into production outcomes.

Every section supports a different part of that story. Separating them keeps project evidence, time-specific opinions, small observations, and experiments from becoming one undifferentiated blog archive.

## Sections: why, what, and how

| Section | Objective | What belongs there | How it works |
|---|---|---|---|
| **Projects** | Demonstrate credible work and how I contribute | Evergreen case studies of production systems, prototypes, and research | One Markdown file per project in `_projects/`; automatically listed at `/projects/` |
| **Writing** | Develop a clear point of view | Substantial essays, technical field notes, leadership reflections, and practical frameworks | Draft in `_drafts/`; move to `_posts/` with a date when ready |
| **Notes** | Preserve one useful idea without forcing it into an essay | Short observations, principles, implementation lessons, or references | One dated Markdown file in `_notes/`; automatically listed at `/notes/` |
| **Lab** | Make an idea tangible through interaction | Small browser-based tools, diagrams, calculators, and demonstrations | One Markdown file per experiment in `_labs/`; automatically listed at `/lab/` |
| **About** | Explain who I am and what I value | Professional narrative, leadership philosophy, learning, teaching, and motivation | Edit `about.md` |
| **Résumé** | Provide a concise career record | Roles, chronology, capabilities, education, credentials, and community work | Edit `resume.md` |

### Projects: evidence of work

Projects answer: **What did I help build, why did it matter, and what did I learn?**

They are evergreen rather than chronological. A project can be updated as its public story becomes clearer. Each case study should distinguish personal contribution from team achievement and normally follow:

1. Context
2. Problem
3. My contribution
4. Approach and important decisions
5. Outcome
6. Lessons
7. Public references

Use Projects for systems such as Contact Catalyst or EVA. Use Writing for a reflective article about what the project taught you.

### Writing: developed thinking

Writing answers: **What do I believe, and what evidence or experience supports it?**

An article should have a central argument, not merely document an event. It can combine several projects or experiences into a useful framework. Articles have publication dates, appear in the RSS feed, and may become dated as technology changes.

Use `_drafts/` until an article is ready. Drafts appear locally only when Jekyll is run with `--drafts`.

### Notes: one useful observation

Notes answer: **What small idea is worth remembering or sharing?**

A note is narrower and shorter than an article. It should make one point clearly. If a note grows into several sections, needs substantial evidence, or develops a larger argument, promote it to Writing.

### Lab: learning through interaction

Lab answers: **Can a reader explore this idea instead of only reading about it?**

Lab entries should be static or browser-based so they remain compatible with GitHub Pages. Each experiment should explain its assumptions and limitations. Projects requiring a backend, database, hosted model, independent release cycle, or reusable package belong in a separate repository; this site should link to them.

## Choosing the right section

Use this quick test:

```text
Is it evidence of something I built?
└─ Yes → Project

Does it make and support a substantial argument?
└─ Yes → Writing

Is it one concise observation or lesson?
└─ Yes → Note

Does its value come from trying or manipulating it?
└─ Yes → Lab
```

One idea can produce several connected pieces. For example:

```text
Contact Catalyst project page
├── factual, evergreen case study
├── article about production AI as a systems problem
└── note about choosing a classifier instead of an LLM
```

## Content templates

Copy, rename, and edit these files:

| Content | Template | Destination |
|---|---|---|
| Project | `_templates/project.md` | `_projects/project-slug.md` |
| Writing | `_templates/writing.md` | `_drafts/article-slug.md` |
| Note | `_templates/note.md` | `_notes/note-slug.md` |
| Lab | `_templates/lab.md` | `_labs/experiment-slug.md` |

The templates contain the expected frontmatter, recommended outline, and publication safeguards. `_templates/` begins with an underscore, so Jekyll does not publish it.

## Publishing workflows

### Publish a project

```bash
cp _templates/project.md _projects/my-project.md
```

Edit its metadata and content. Set `featured: true` to show it on the Projects index and use `order` to control its position.

### Draft and publish an article

Start the draft:

```bash
cp _templates/writing.md _drafts/my-article.md
bundle exec jekyll serve --drafts
```

When it is ready, add the publication date to its filename:

```bash
mv _drafts/my-article.md _posts/2026-07-24-my-article.md
```

Jekyll derives the publication date from the `_posts/YYYY-MM-DD-title.md` filename.

### Publish a note

```bash
cp _templates/note.md _notes/my-observation.md
```

Set the `date` in its frontmatter. Notes publish immediately because the `notes` collection has `output: true`.

### Add a Lab experiment

```bash
cp _templates/lab.md _labs/my-experiment.md
```

Set `featured: true` to place it in the featured group and use `order` to control its position. Put substantial browser behaviour in `assets/js/labs/my-experiment.js`; the shared Lab layout loads the file declared by `script`. A Lab experiment should work without a server-side application.

## Local preview

Install Ruby and Bundler, then install the project dependencies:

```bash
bundle install
```

Preview published content:

```bash
bundle exec jekyll serve
```

Preview published content and drafts:

```bash
bundle exec jekyll serve --drafts
```

Open <http://127.0.0.1:4000/>. Jekyll watches for content and style changes, then rebuilds automatically. Changes to `_config.yml` require restarting the server.

Run a production-style build without starting a server:

```bash
bundle exec jekyll build
```

The generated site appears in `_site/`, which is intentionally ignored by Git.

## Publish through GitHub Pages

The repository should be named `wunlung.github.io`. It is configured to publish at <https://wunlung.github.io> with an empty `baseurl` because it is a user site served from the domain root.

In GitHub:

1. Open **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main` and `/ (root)`.
4. Save.

Publish changes with:

```bash
git add .
git commit -m "Describe the website update"
git push
```

## Repository structure

```text
.
├── _projects/       evergreen project case studies
├── _posts/          published, dated articles
├── _drafts/         unpublished article drafts
├── _notes/          short, dated observations
├── _labs/           browser-based experiments
├── _templates/      copy-ready authoring templates
├── _layouts/        shared HTML structures
├── _includes/       reusable head and navigation
├── assets/
│   ├── css/         visual theme
│   └── js/          browser interactions
├── context/         private working context; ignored by Git
├── old_resume/      private source résumés; ignored by Git
├── index.md         homepage
├── work.md          Projects index at `/projects/`
├── writing.md       Writing index at `/writing/`
├── notes.md         Notes index at `/notes/`
├── lab.md           Lab experiment index
├── about.md         professional story and philosophy
├── resume.md        web résumé
└── _config.yml      site identity, URLs, collections, and defaults
```

The filename `work.md` is retained internally for compatibility, but its public page is `/projects/`; the old `/work/` URL redirects there.

## Editorial and privacy rules

Before publishing:

- Verify dates, awards, certifications, metrics, and event names.
- Attribute team outcomes fairly and describe personal contribution precisely.
- Do not publish private email addresses, phone numbers, home addresses, family details, customer information, or internal contacts.
- Do not publish employer code, data, screenshots, or architecture without approval.
- Distinguish a prototype, experiment, or competition entry from a production system.
- Prefer approved public references for externally verifiable claims.
- Use Australian English and avoid generic AI hype.

`context/`, `old_resume/`, and `codex-personal-website-context.md` are ignored by Git and excluded from Jekyll. They are source material, not website content.

## Current content

- Featured projects: Contact Catalyst, EVA, and Domain-Specific Advisory Agent
- Published article: “Why production AI is a systems problem”
- Published note: “An LLM is not the default answer”
- Lab: Decision Compass
- Draft articles: “Learn to earn to return”, “Machine-learning delivery is more than modelling”, and “Building a domain-specific AI agent in one day”
