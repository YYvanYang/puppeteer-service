# puppeteer-service
生成分享圖

## Issue
1. error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory

```
sudo apt-get install libnss3
```

2. 使用国内Chromium源
https://npm.taobao.org/mirrors

# // > https://npm.taobao.org/mirrors
# // export PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors
# // set PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors

npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
npm i puppeteer