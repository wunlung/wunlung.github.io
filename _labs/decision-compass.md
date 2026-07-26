---
title: "Decision Compass"
description: "Explore a sensible starting approach for an AI problem."
question: "Which technical approach best fits these constraints?"
status: "Experiment"
year: 2026
order: 1
featured: true
script: /assets/js/decision-compass.js
tags:
  - Model Thinking
  - AI Product Engineering
---

Choose a few characteristics of the problem. The compass suggests a starting point—not a final architecture.

<form class="compass" id="decision-compass">
  <label>How stable are the rules?
    <select name="rules"><option value="high">Clear and stable</option><option value="medium">Partly understood</option><option value="low">Ambiguous or changing</option></select>
  </label>
  <label>How much labelled data is available?
    <select name="labels"><option value="high">Plenty</option><option value="medium">A useful sample</option><option value="low">Very little</option></select>
  </label>
  <label>Does the task require generating or synthesising language?
    <select name="generation"><option value="no">No</option><option value="yes">Yes</option></select>
  </label>
  <label>How costly is a wrong answer?
    <select name="risk"><option value="low">Low</option><option value="medium">Moderate</option><option value="high">High</option></select>
  </label>
  <button class="button" type="submit">Suggest a starting point</button>
</form>

<section class="compass-result" id="compass-result" aria-live="polite" hidden></section>

## How it works

The compass applies a small, transparent decision tree:

- Stable, explainable rules favour a deterministic workflow.
- Labelled examples and no generation requirement favour a supervised baseline.
- Language generation favours a prompted or retrieval-grounded language model.
- An ambiguous problem favours a small discovery experiment before architecture selection.
- High-cost errors add human review and a fallback path.

The result is intentionally explainable. You can inspect the heuristic in the browser-side JavaScript rather than trusting a hidden score.

## Limitations

Real architecture decisions also depend on data sensitivity, volume, integration constraints, team capability, evaluation design, maintenance cost, and regulatory obligations. The compass helps frame the first conversation; it does not replace technical discovery.

## Related thinking

- [Why production AI is a systems problem]({{ '/blog/production-ai-is-a-systems-problem/' | relative_url }})
- [An LLM is not the default answer]({{ '/notes/llm-is-not-the-default/' | relative_url }})
- [Contact Catalyst]({{ '/projects/contact-catalyst/' | relative_url }})
