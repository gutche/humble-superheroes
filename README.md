## Follow these guidelines to secure effective collaboration.

### Communication

Use GitHub Issues or a project management tool like Trello or Jira to track tasks and progress.

Hold regular stand-up meetings (e.g., daily or weekly) to discuss progress, blockers, and next steps.

## Git Workflow

### Branching

Create a new branch for each feature or bug fix:

```
git checkout -b feature/add-superhero-deletion
```

Use descriptive branch names (e.g., feature/add-sorting, bugfix/fix-validation).

### Commits

Write clear, concise commit messages:

```
feat: add superhero deletion functionality
fix: resolve validation error in SuperheroForm
```

### Pull Requests (PRs)

Open a PR for each feature/bug fix.

Request a code review from your teammate before merging.

### Code Reviews

Review each other's code for:

-   Correctness

-   Readability

-   Adherence to coding standards

-   Provide constructive feedback.

## If I had more time I'd do the following:

-   Implement superhero deletion functionality
-   Implement superhero editing functionality
-   Integrate a database to ensure new hero data is persisted
-   Consider dockerizing the app to guarantee consistent service versions across the team
