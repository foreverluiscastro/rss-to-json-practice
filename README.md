# Using the rss-to-json NPM package to grab Medium stories and add them to your application

I wanted to display the title and links my Medium blogs on my website to create a better user experience. I originally tried using the Medium API but found out the API was made for write only purposes. So, to grab the information related with my stories, I used the stories RSS feed: https://medium.com/feed/@your-user-name-here and then used the rss-to-json package to parse the rss into stringied json, and then take that string and parse it into sweet sweet json.

The idea started with displaying medium articles in an JavaScript application, but this idea could be used in a bunch of cool situations. Like creating a widget that displays your most recent linkedIn and Twitter posts or recently liked posts. The possibilites are exciting.

you can find the package documentation here: https://github.com/nasa8x/rss-to-json