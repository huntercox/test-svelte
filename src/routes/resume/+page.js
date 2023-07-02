const data = 'hello, resume page.';
console.log(data);

export async function load({ fetch }) {
	return { data }
}