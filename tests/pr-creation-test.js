// Test script for debugging PR creation issues

async function testPRCreation() {
    // Test cases for PR creation
    const testCases = [
        {
            title: "Basic PR Test",
            base: "main",
            head: "feature/test",
            body: "Test PR"
        },
        {
            title: "PR with Full Branch Reference",
            base: "main",
            head: "DanielEskinazi:feature/test",
            body: "Test PR with full reference"
        },
        {
            title: "PR with Additional Parameters",
            base: "main",
            head: "feature/test",
            body: "Test PR with params",
            draft: false,
            maintainer_can_modify: true
        }
    ];

    // Log request details for debugging
    console.log('Authorization Header:', 'Bearer ' + process.env.GITHUB_TOKEN);
    
    for (const testCase of testCases) {
        try {
            console.log('\nTesting PR Creation:', testCase.title);
            console.log('Request Payload:', JSON.stringify(testCase, null, 2));
            
            const response = await fetch(
                'https://api.github.com/repos/DanielEskinazi/claude-agent-test/pulls',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + process.env.GITHUB_TOKEN,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(testCase)
                }
            );

            const data = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Headers:', Object.fromEntries(response.headers));
            console.log('Response Body:', JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
}

testPRCreation();