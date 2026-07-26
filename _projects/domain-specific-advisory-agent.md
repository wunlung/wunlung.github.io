---
title: "Domain-specific advisory agent"
description: "A one-day compound-AI prototype designed around three explicit behaviours."
year: 2024
kind: Compound AI prototype
role: "Scenario design, architecture, preparation, and implementation"
status: "One-day innovation prototype"
featured: true
order: 4
tags:
  - RAG
  - AI Agents
  - Databricks
  - LangChain
---

## Context

A colleague asked whether a conversational assistant could make specialist information easier to access. Instead of beginning with a generic chatbot, I framed three behaviours the prototype had to demonstrate:

1. Answer a question without domain context.
2. Improve the answer when relevant domain material is available.
3. Recognise an unanswerable question and use controlled fallback logic.

## Preparing for a one-day build

Before the build day, I worked with domain contributors to gather representative documents, questions, and expected answers. I decomposed the prototype into retrieval, orchestration, tools, interface, and feedback, then removed platform dependencies that could block the team.

## Implementation

During the sprint, a two-person engineering team divided the work across loading and chunking PDFs into a vector store, connecting Databricks-hosted foundation models through LangChain, testing a messaging webhook and summarisation tool, and building a Gradio interface.

We tested the three scenarios with users and tuned token and chunk sizes before the final demonstration.

## Outcome

The team delivered a working demonstration in one day. Its value was as a learning instrument: it showed the difference between answering without context, grounding an answer in domain material, and handling an answer the system could not support.

## Lessons

The breakthrough was not coding faster. It was deciding in advance what evidence would make the prototype useful. A narrow scenario, explicit failure behaviour, prepared dependencies, and complementary ownership created more progress than an open-ended instruction to “build a RAG bot”.

Before production, the prototype would need systematic evaluation, access controls, observability, content governance, and a durable feedback process.
