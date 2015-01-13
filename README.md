# hexo-tag-video

This is a tag plugin of Hexo to insert a video on your blog posts.

Support:

- youku


## Installation

Run the following command in the root directory of hexo:

```sh
npm install hexo-tag-video --save
```

And enable the plugin in your `_config.yml.`

```
plugins:
  - hexo-tag-video
```

## Usage

The following code insert the video player in your post:

```
{% video video_site video_id %}
```

#### Example

```
{% video youku XNTkyMTM0MzY4 %}
```