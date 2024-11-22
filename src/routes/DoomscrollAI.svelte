<script lang="ts">
import OpenAI from 'openai';

const client = new OpenAI({apiKey: process.env['OPENAI_API_KEY'],});

async function callAI() {
    const stream = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: 'Say this is a test' }],
        stream: true,
    });
    var a = [];
    for await (const chunk of stream) {
        a.push(chunk.choices[0]?.delta?.content || '');
    }
    return a;
}

callAI();
</script>

