
# acklenavenue.github.io
The AcklenAvenue official website.

# Installation

## Windows

1. Install ruby, and jekyll gem. Follow this steps https://jekyllrb.com/docs/installation/windows/
2. Clone repo 
 ```console
git clone https://github.com/AcklenAvenue/acklenavenue.github.io.git
```
4. Open terminal in the project directory.
5. Install required gems
 ```console
bundle install
``` 
8. Serve project 
 ```console
bundle exec jekyll serve
``` 

# Known Issues.
1. If Ruby version 3.0.0 or higher is used, gem webrick is not included. Fix with 
 ```console
bundle add webrick
``` 

