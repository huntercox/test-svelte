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
  },
	pageBy(pageId: 7) {
    flexLayouts {
      fieldGroupName
      flexLayouts {
				... on ContentNode_Flexlayouts_FlexLayouts_BasicContent {
          fieldGroupName
          textContent
        }
        ... on ContentNode_Flexlayouts_FlexLayouts_AdvancedContent {
          fieldGroupName
          visualEditor
          settings {
            fieldGroupName
          }
        }
        ... on ContentNode_Flexlayouts_FlexLayouts_Columns {
          fieldGroupName
          columnLayouts {
            ... on ContentNode_Flexlayouts_FlexLayouts_Columns_ColumnLayouts_2Columns {
              column1Content
              column2Content
            }
            ... on ContentNode_Flexlayouts_FlexLayouts_Columns_ColumnLayouts_3Columns {
              column1Content
              column2Content
            }
          }
        }
        ... on ContentNode_Flexlayouts_FlexLayouts_Hero {
          fieldGroupName
          image {
            mediaItemId
            sourceUrl(size: FLEX_HERO_TALL)
          }
        }
        ... on ContentNode_Flexlayouts_FlexLayouts_SectionHeading {
          fieldGroupName
          heading {
            headingTag
            text
          }
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