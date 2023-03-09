# Using the rss-to-json NPM package to grab Medium stories and add them to your application

I wanted to display the title and links my Medium blogs on my website to create a better user experience. I originally tried using the Medium API but found out the API was made for write only purposes. So, to grab the information related with my stories, I used the stories RSS feed: https://medium.com/feed/@your-user-name-here and then used the rss-to-json package to parse the rss into stringied json, and then take that string and parse it into sweet sweet json.

you can find the package documentation here: https://github.com/nasa8x/rss-to-json