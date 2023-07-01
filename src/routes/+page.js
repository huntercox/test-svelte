const query = `
query getPages {
	pages(first: 5) {
		nodes {
			pageId
			title
		}
	}
}
`;
const query2 = `
mutation LoginUser {
  login( input: {
    clientMutationId: "uniqueId",
    username: "hunter",
    password: "eN1@rG1wOH4XX&Pp"
  } ) {
    authToken
    user {
      id
      name
    }
  }
}
`;
export async function load({ fetch }) {
	const response = await fetch('http://huntercoxdev.local/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaHVudGVyY294ZGV2LmxvY2FsIiwiaWF0IjoxNjg4MTk0OTg3LCJuYmYiOjE2ODgxOTQ5ODcsImV4cCI6MTY4ODE5NTI4NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.tPV9V6NnNwkLOfgu3IUbjhpyeRUnDL893JhVnMCeYhg'
		},
		body: JSON.stringify({
			query: query
		})
	});
	const responseObj = await response.json();
	const data = responseObj.data.pages.nodes;
	// console.log(data);
	return { data }
	// console.log(responseObj.data);
}