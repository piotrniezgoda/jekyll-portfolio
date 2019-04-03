# Jekyll portfolio&blog

Welcome to personal website and blog. Everything was created in Jekyll.
In the future, I want to add some improvements, list below.


##TODO

- disable tab key for dots in portfolio section in slider
- disable tab key for navigation when is hidden
- 404 page (I know, but no time...)
- switch light/dark theme for blog
- improve navigation on blog
- fix RWD*

*Project may have problems with RWD on some devices. I just can't test them all. I don't have iPhone, iPad, mac(safari), etc. So I can only try to fix reported bugs

## Usage - Project structure

This project is created from scratch, it's not modified Jekyll theme.

Site contains 5(at this moment) main files in main directory:
 - index.md which uses theme _layouts/home.html
 - blog.md which uses theme _layouts/blog.html
 - o-blogu.md which uses theme _layouts/infopage.html
 - posty.md which uses theme _layouts/posts.html

 files form _layouts directory uses modules from _includes directory. In _includes we can find folderw which contains folders with sorted modules.

 posts form folder _posts uses layout from _layouts/post.html

 In file _config.yml we can set a basic settings, like:
  - site title
  - site description (displayed in meta tag)
  - blog title
  - blog subtitle
  - github username (optional)

  Folder _posts contains just posts displayed on portfolio site, and blog

  Folder _sass contains modular .scss files responsible for appearance of the page.
  Files in assets/css are main css files for each page (post.html uses post.scss, blog uses blog.scss etc.). These files import the necessary modules from the _sass directory.

  folder assets also contains all images, svg icons, favicons


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/piotrniezgoda/jekyll-portfolio-website.


