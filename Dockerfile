FROM wernight/phantomjs:2.1.1

LABEL maintainer="mokeyjay<i@mokeyjay.com>"

COPY service.js .

EXPOSE 8080

ENTRYPOINT ["phantomjs", "service.js"]