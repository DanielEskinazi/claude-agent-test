# Pull Request Creation Debugging Guide

## Current Issue
Attempts to create pull requests through the GitHub API result in a 422 Unprocessable Entity error.

## Debug Steps

1. **Verify Prerequisites**
   - Repository exists and is accessible
   - Both branches exist
   - Authentication token has necessary permissions
   - No branch protection rules blocking PR creation

2. **Check API Requirements**
   - Correct endpoint: `/repos/{owner}/{repo}/pulls`
   - Required fields: title, head, base
   - Proper content type headers
   - Valid authentication

3. **Test Different Formats**
   - Basic PR creation
   - Full branch reference format
   - With additional parameters

4. **Common Issues**
   - Invalid branch names
   - Missing permissions
   - Branch protection rules
   - Repository settings
   - API version mismatches

## Test Script Usage

1. Set environment variable:
   ```bash
   export GITHUB_TOKEN='your_token_here'
   ```

2. Run test script:
   ```bash
   node tests/pr-creation-test.js
   ```

3. Check output for:
   - Request details
   - Response status
   - Error messages
   - Headers

## Next Steps
1. Review test results
2. Check error messages
3. Verify permissions
4. Test with different tokens
5. Review repository settings
