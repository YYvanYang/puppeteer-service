const Koa = require('koa');
const app = new Koa();

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

// response
app.use(async ctx => {
    const { url } = ctx.query
    
    if (!url) {
        ctx.body = "The `url` query string is empty"
        return
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.emulate(devices['iPhone 6']);
        await page.goto(url);
        ctx.body = await page.screenshot({
            fullPage: true
        });
        await browser.close();
    } catch (error) {
        ctx.body = error
    }

});

app.listen(10050);