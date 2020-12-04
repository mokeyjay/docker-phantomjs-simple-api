# docker-phantomjs-simple-api
A simple web api for PhantomJS

## Usage:
```shell
docker run -d -p 8080:8080 mokeyjay/phantomjs-simple-api

# get a screenshot for page (JPG base64 encoded)
curl -X POST '127.0.0.1:8080' -H 'Content-Type: application/json' -d '{"url": "http://www.baidu.com"}'
```