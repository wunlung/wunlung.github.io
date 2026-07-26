const form = document.querySelector("#decision-compass");
const result = document.querySelector("#compass-result");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(form));
  let approach;
  let reason;

  if (values.rules === "high" && values.generation === "no") {
    approach = "Rules or a deterministic workflow";
    reason = "Stable, explainable rules are usually cheaper to operate and easier to test than a model.";
  } else if (values.generation === "no" && values.labels !== "low") {
    approach = "A supervised machine-learning baseline";
    reason = "You have labelled examples and do not need generation. Establish a measurable classifier baseline before adding complexity.";
  } else if (values.generation === "yes") {
    approach = values.labels === "low" ? "Retrieval with an LLM" : "Prompted or fine-tuned language model";
    reason = values.labels === "low" ? "Ground generation in trusted source material and evaluate it against real tasks." : "Compare prompting and fine-tuning empirically across quality, cost, and latency.";
  } else {
    approach = "A small discovery experiment";
    reason = "The problem is still ambiguous. Collect representative examples and learn the error modes before committing to an architecture.";
  }

  const safeguard = values.risk === "high" ? " Because errors are costly, begin with human review and a clear fallback path." : "";
  result.innerHTML = `<p class="eyebrow">Starting point</p><h2>${approach}</h2><p>${reason}${safeguard}</p>`;
  result.hidden = false;
});
