---
title: "Contact Catalyst"
description: "A conversational-intelligence prototype for turning customer interactions into structured, actionable insight."
year: 2023
kind: Conversational intelligence
role: "Solution design, repository and data-platform foundations"
status: "Public competition case study"
recognition: "Grand Prize · Databricks Asia-Pacific LLM Cup 2023"
featured: true
order: 1
tags:
  - Generative AI
  - NLP
  - Databricks
  - MLOps
references:
  - label: "Databricks winner announcement"
    url: "https://www.databricks.com/blog/announcing-winners-first-databricks-asia-pacific-llm-cup"
  - label: "Contact Catalyst on Devpost"
    url: "https://devpost.com/software/root-cause-analysis"
---

## Context

Contact Catalyst began as a four-person Optus team entry in the inaugural Databricks Asia-Pacific LLM Cup. The competition involved more than 1,000 data and AI practitioners across more than 10 countries.

## Problem

Customer conversations contain valuable signals, but manual notes can be incomplete and large volumes of text and voice data are difficult to analyse consistently. The team explored how an automated pipeline could surface customer intent, emerging topics, concise summaries, sentiment, and aggressive language.

## My contribution

I designed the solution and established the code repository, data infrastructure, and shared platform on which the team developed its machine-learning prototypes. My focus was creating enough technical structure for four people with complementary strengths to experiment quickly and integrate their work into one end-to-end system.

## Technical approach

The prototype combined specialised models rather than forcing every task through one LLM:

- Fine-tuned BERT for intent classification
- Fine-tuned RoBERTa for sentiment and aggression detection
- BERTopic, KeyBERT, and a Llama 2 API for new-topic detection
- A Llama 2 API for structured conversation summarisation
- MLflow model serving for real-time and batch scoring
- Databricks dashboards and a Gradio application

The team used synthetic and public complaint data during the competition. When zero- and few-shot LLM classification did not perform well enough, it moved to a fine-tuned BERT classifier.

## Outcome

The end-to-end prototype covered data generation, model experimentation, serving, dashboards, and a web application. It received the Grand Prize, and the team presented it at the APJ Data + AI World Tour in January 2024.

## Lesson

An LLM is a tool, not the default answer. Model capability matters, but so do privacy, infrastructure, evaluation, interfaces, feedback, and the way a team joins those pieces together.
