import { OpenAI } from 'openai';
import { encoding_for_model } from 'tiktoken';

const openai = new OpenAI();

async function main() {
	const response = await openai.chat.completions.create({
		model: 'gpt-4o',
		messages: [{ role: 'user', content: 'Say something cosmic cool' }],
		frequency_penalty: 1.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
		n: 2, // gives two responses just need to remove the choices[0] to choices
		max_completion_tokens: 500, //An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and reasoning tokens.

		// there are more parameters but need to test as the times goes with the application design
	});

	console.log(response.choices);
}

function encodePrompt() {
	const prompt = 'How are you today?';
	const enc = encoding_for_model('gpt-4o');
	const words = enc.encode(prompt);

	console.log(words);
}

main();
// encodePrompt();
