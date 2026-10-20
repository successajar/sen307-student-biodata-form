# Contributing

Each member will work on a separate feature branch and submit a pull request for review.

1. Pick up your assigned GitHub Issue.
2. Clone the repository and create a new branch from `main`.
3. Implement and test your contribution.
4. Commit and push using your own GitHub account and a verified commit email.
5. Open a pull request describing your changes and reference your Issue.
6. The group leader reviews and coordinates merges.

Use example data only. Do not include real student biodata in this public repository.

## Clone and start a branch

```bash
git clone https://github.com/successajar/sen305-student-biodata-form.git
cd sen305-student-biodata-form
git switch -c feature/my-task
```

## Commit and push

```bash
git add .
git commit -m "feat: implement assigned task"
git push -u origin feature/my-task
```

Do not push directly to `main`. If your branch gets behind, coordinate integration with the group leader.
