# taskboard - the Codecop demo

A tiny task board API. This repo exists to demonstrate
[Codecop](https://codecop.codes), the merge gate for AI-generated pull requests.

Look at [pull request #2](../../pull/2): an AI-authored PR that adds a user
endpoint. It looks plausible. Codecop's verdict on it shows three planted
problems, each with clickable evidence:

- a dependency that does not exist on npm (hallucinated)
- a leaked GitHub-token-shaped credential (fake, for the demo)
- tests that assert nothing, plus a tautology and a sneaky skip

Everything in the PR is intentionally realistic. Everything on `main` is honest.
