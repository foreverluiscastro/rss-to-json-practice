// I want to be able to build a blog area for my portfolio to showcase my medium blogs
const { parse } = require("rss-to-json");

// async await
// (async () => {
//   var rss = await parse('https://medium.com/feed/@luis-dejesus-castro');
//   console.log(JSON.stringify(rss, null, 3));
// })();

// promise
parse("https://medium.com/feed/@luis-dejesus-castro")
  .then((rss) => JSON.stringify(rss, null, 3))
  .then((stringifiedData) => JSON.parse(stringifiedData))
  .then(({ items }) => collectStoryLinks(items));

// iterate through the stories
function collectStoryLinks(stories) {
  console.log("Here are all of my stories on Medium:");
  stories.forEach((story) => {
    console.log(story.title);
    console.log(story.link);
  });
}

// Using this in a React app, you can put your parse method inside of a useEffect so that when the app loads, the request for the rss is made and the parsed info can be saved to a state variable.