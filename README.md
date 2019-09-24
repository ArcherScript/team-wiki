# Team-Wiki
## A completely data driven wiki site

# Build a single JSON file and that's it!

Team-wiki was designed so that it's easy to create, or generate new wiki pages. <br> <br>
Just add to the JSON file, and that's it.

# JSON Documentation

## title

Title is the title of the wiki. <br> 
If you are making a wiki about `Food` your title should probably be `Food` or `Foods`

## theme

This is the color scheme of your wiki. The font color will automatically set based off of the theme.<br>

### `primary`
By default it's set to &nbsp; ![#2196f3](https://placehold.it/15/2196f3/000000?text=+) `#2196f3`

### `secondary`
By default it's set to &nbsp; ![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) `#FFFFFF`

## home
Home is the landing page of your wiki site. The search bar searches through your list of pages, and will automatically navigate you to the page you have searched for. <br>

### `logo`
This is the url for the image you want to show up above the search bar on the home page.
### `footer`
<u>Not yet implemented</u>

## categories
Categories are sections, that you can put your pages under. Similar to how you would put your files in a folder if you wanted to organize it.

### `id`
Each category needs a unique identifier, so that the pages know which category they belong to.

### `name`
The name of your category.

### `showInDrawer`
Whether or not you wish to show the category in the side drawer.

## pages
These are the actual pages of your wiki site. You may have a page for Hot Dogs, or Porkchops.

### `id`
Each page needs a unique identifier, so that the articles know which page they belong to.

### `category`
This is the category Id that the page belongs to.

### `title`
The title of your wiki page.

### `description`
The description of your wiki page, this will show up as a subheader of the page.

### `style`
<u>Not Yet Implemented</u>

## articles
Articles are the content that you wish to be displayed inside of your wiki page.

### `id`
The unique identifier of your article, these have no use as of right now. When widgets are implemented, they will be the unique identifier for widgets.

### `title`
The title of your article, or a header for your content.

### `description`
The actual content of your article, currently only accepts strings.

### `style`
<u>Not Yet Implemented</u>

## widgets
<u>Not yet implemented</u>