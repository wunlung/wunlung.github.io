---
title: "Production classification for regulated operations"
description: "An end-to-end AI capability that turned unstructured customer issues into consistent, actionable operational signals."
year: 2026
kind: Production AI system
role: "Technical lead across data development, modelling, deployment, and operational feedback"
status: "Production case study · operational details generalised"
featured: true
order: 2
tags:
  - Production AI
  - Classification
  - Human-in-the-loop
  - ModelOps
---

## Context

A high-volume customer operation needed a more consistent way to convert unstructured issue descriptions into structured signals that teams could act on. The setting demanded more than a promising model: outputs needed clear definitions, accountable destinations, reliable operation, and a path for correction.

This case study deliberately omits customer data, internal taxonomies, volumes, performance figures, system names, and operational architecture.

## Problem

The source language was nuanced, the classification scheme was broad, and a single item could belong to more than one category. Historical labels were not sufficient to train a dependable system, while an output that could not be connected to an operational workflow would have little practical value.

The challenge was therefore to build the data, model, and operating system together.

## My contribution

I led the technical delivery across compute and data foundations, taxonomy refinement, annotation design, programmatic data development, modelling, deployment, output contracts, and the feedback workflow.

I also worked with domain specialists and downstream users to connect model outputs to meaningful actions. This made evaluation an operational question—not only a model-accuracy exercise.

## Approach

The system combined several complementary mechanisms:

- Explicit category definitions and representative examples
- Batched human annotation with peer review and group calibration
- Domain rules and programmatic labelling to expand useful training signals
- Specialised multi-label models designed for repeatable batch inference
- A common deployment interface for different model implementations
- Ready-to-consume output schemas for downstream analysis
- Human review and error analysis feeding improvements back into the data

We treated disagreements and model errors as evidence about the whole system. Some exposed model limitations; others revealed ambiguous definitions, missing examples, or workflow assumptions that needed to change.

## Outcome

The work established an operational classification capability and enabled structured reporting from information that had previously been difficult to use consistently. A specialised model made frequent batch scoring practical while retaining control over deployment, cost, and data handling.

Exact scale, performance, and commercial figures are intentionally omitted because they are employer-confidential.

## Lessons

The most important asset was not a particular model. It was the learning loop connecting domain definitions, training data, evaluation, operational ownership, and user feedback.

Three principles generalise beyond this project:

1. A taxonomy is part of the product, not merely a modelling input.
2. Model outputs become valuable only when someone can understand and act on them.
3. For stable, high-volume tasks, a specialised model may offer a better balance of quality, cost, latency, privacy, and control than a general-purpose LLM.

