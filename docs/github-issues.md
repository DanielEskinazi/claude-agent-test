# GitHub Issues Guide

## What are GitHub Issues?
GitHub Issues is an integrated tracking tool that helps developers manage tasks, bugs, feature requests, and discussions within their repositories.

## Key Features

### 1. Issue Creation
- Title and description
- Markdown formatting support
- File attachments
- @mentions for team collaboration
- Reference to code, commits, or other issues

### 2. Organization Tools
- Labels for categorization
- Assignees for responsibility
- Milestones for project planning
- Project boards integration

### 3. Workflow Integration
- Links to pull requests
- Automated closing via commits
- Branch creation from issues
- Project automation

## Best Practices

### Writing Good Issues
1. **Clear Title**
   - Descriptive and concise
   - Includes key information (e.g., "[BUG] Login form fails on mobile")

2. **Detailed Description**
   - Context and background
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots or code snippets

3. **Proper Labeling**
   - Bug, enhancement, documentation, etc.
   - Priority levels
   - Status indicators

### Managing Issues
1. **Regular Updates**
   - Status changes
   - Progress reports
   - Blocker documentation

2. **Organization**
   - Consistent labeling
   - Clear assignees
   - Milestone assignment
   - Project board placement

3. **Closure**
   - Clear resolution
   - Documentation of solution
   - Links to resolving PR

## Example Issue Templates

### Bug Report Template
```markdown
## Bug Description
[Clear description of the bug]

## Steps to Reproduce
1. [First Step]
2. [Second Step]
3. [Additional Steps...]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Browser/Device:
- OS:
- Version:

## Additional Context
[Screenshots, error messages, etc.]
```

### Feature Request Template
```markdown
## Feature Description
[Clear description of the feature]

## Problem It Solves
[What problem or need does this address?]

## Proposed Solution
[How should it work?]

## Alternative Solutions
[Other ways to solve this]

## Additional Context
[Any other relevant information]
```

## Advanced Usage

### Integration with Code
- Link issues to pull requests
- Reference issues in commits
- Automatically close issues

### Keywords
- `fixes #123` - Closes issue when PR is merged
- `closes #123` - Same as fixes
- `resolves #123` - Same as fixes
- `ref #123` - Creates a reference

### Automation
1. **GitHub Actions**
   - Automatic labeling
   - Issue assignment
   - Status updates

2. **Project Board Automation**
   - Auto-move cards
   - Status tracking
   - Milestone progress

## Tips and Tricks
1. Use issue templates for consistency
2. Leverage markdown formatting
3. Utilize project boards for visualization
4. Set up automated workflows
5. Regular issue triage and updates

## Common Pitfalls to Avoid
1. Unclear or vague descriptions
2. Missing reproduction steps
3. Lack of updates or follow-up
4. Inconsistent labeling
5. Orphaned or stale issues

## Further Resources
- [GitHub Issues Documentation](https://docs.github.com/en/issues)
- [GitHub Issue Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [GitHub Project Management](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
