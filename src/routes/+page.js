import '../global.scss';

const query = `
query headerInfo {
  generalSettings {
    title
    url
  },
  menus(where: {id: 3}) {
    nodes {
      menuItems {
        nodes {
          uri
          url
          label
        }
      }
    }
  }
}
`;

export async function load({ fetch }) {
	const response = await fetch('http://huntercoxdev.local/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: query,
		})
	});
	const responseObj = await response.json();
	const data = responseObj.data;;
	// const data = responseObj.data.pages.nodes;
	// console.log(data);
	return { data }
	// console.log(responseObj.data);
}