---
title: "Why production AI is a systems problem"
description: "The model matters, but dependable AI emerges from the system around it."
tags:
  - Production AI
  - Model Thinking
---

An impressive model can make a compelling demo. A dependable product asks harder questions.

Does it solve the right problem? How do we know when it is wrong? What does each decision cost? Who receives feedback, and what happens next? These questions are not outside the AI work. In production, they *are* the work.

## The model is one component

It is tempting to organise an AI project around model quality. That gives us something concrete to optimise, but it can hide the larger system:

> Human need ↔ Model behaviour ↔ Production system

A technically strong model can still fail because the data arrives too late, the output does not fit the user’s workflow, the evaluation set misses important cases, or nobody owns the feedback loop.

## Four constraints, not one score

I find it useful to consider four constraints together:

1. **Quality:** Is the output good enough for this decision?
2. **Cost:** Is it economical at the expected volume?
3. **Latency:** Does it respond within the product’s useful window?
4. **Risk:** What happens when it is confidently wrong?

Improving one can make another worse. A larger model might improve a benchmark while increasing latency and cost. Human review might reduce risk while creating an operational bottleneck. There is no universal optimum—only a trade-off suited to the problem.

## Design the feedback loop early

Production systems change. Users adapt, language shifts, upstream data moves, and model behaviour drifts. Monitoring can tell us that something changed, but the system also needs a path from observation to action.

That means deciding how feedback is captured, who examines uncertain cases, how failures enter evaluation sets, and when an update is justified. Human review is not necessarily a failure of automation. Often, it is how the system keeps learning safely.

## Start with the outcome

Before choosing rules, classical machine learning, retrieval, fine-tuning, or agents, I try to make the desired outcome and constraints explicit. The simplest approach that meets them is usually the strongest place to start.

The newest model can be useful. It is not a product strategy. The strategy is the complete system that turns technical capability into a reliable outcome for people.
