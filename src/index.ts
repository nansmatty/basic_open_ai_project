import { OpenAI } from 'openai';
import { encoding_for_model } from 'tiktoken';

const openai = new OpenAI();

async function main() {
	const response = await openai.chat.completions.create({
		model: 'gpt-4o',
		messages: [{ role: 'user', content: 'How tall is mount everest?' }],
	});

	console.log(response.choices[0].message.content);
}

function encodePrompt() {
	const prompt = 'How are you today?';
	const enc = encoding_for_model('gpt-4o');
	const words = enc.encode(prompt);

	console.log(words);
}

encodePrompt();
