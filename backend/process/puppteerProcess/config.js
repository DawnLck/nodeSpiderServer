/**
 *  puppteer config.js
 **/

module.exports = {
  browserConfig: {
    // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
    executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome",
    //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // headless为true, 不会打开浏览器
    headless: false,
    args: [
      "--window-size=1366," + 768 * 2,
      "--disable-dev-shm-usage",
      "--unlimited-storage",
      "--full-memory-crash-report"
    ]
  },
  pageConfig: {
    timeout: 30000,
    // waitUntil: "domcontentloaded"
    waitUntil: "networkidle2"
  },
  TAG_LINK: "A",
  TAG_DIV: "DIV",
  META_KEYWORD: 'meta[name="keywords"]',
  screenShot: true,

  net: {
    sizes: [10, 4, 4],
    layers: [
      {
        widthPercentage: {},
        heightPercentage: {},
        dom_level: {},
        textBodyPercentage: {},
        relativeTextPercentage: {},
        childElementCount: {},
        siblingsCount: {},
        linkElementCount: {},
        imageElementCount: {},
        anchorMarkerCount: {}
      },
      {
        "0": {
          bias: -22.4047908782959,
          weights: {
            widthPercentage: 18.94073486328125,
            heightPercentage: -28.69698715209961,
            dom_level: 19.16392707824707,
            textBodyPercentage: -30.5950927734375,
            relativeTextPercentage: 16.36256980895996,
            childElementCount: -2.56007981300354,
            siblingsCount: 24.97085189819336,
            linkElementCount: -6.048788070678711,
            imageElementCount: 39.33292007446289,
            anchorMarkerCount: 9.247575759887695
          }
        },
        "1": {
          bias: -12.917838096618652,
          weights: {
            widthPercentage: 11.827433586120605,
            heightPercentage: 2.1317551136016846,
            dom_level: 4.693174362182617,
            textBodyPercentage: -22.834932327270508,
            relativeTextPercentage: 19.122888565063477,
            childElementCount: 31.53812026977539,
            siblingsCount: -21.303600311279297,
            linkElementCount: 0.1370657980442047,
            imageElementCount: 1.986682415008545,
            anchorMarkerCount: -1.4431707859039307
          }
        },
        "2": {
          bias: 10.942296981811523,
          weights: {
            widthPercentage: 0.250539630651474,
            heightPercentage: -8.76171875,
            dom_level: 3.178704023361206,
            textBodyPercentage: -5.101374626159668,
            relativeTextPercentage: -2.844489574432373,
            childElementCount: -0.0060954526998102665,
            siblingsCount: 2.227611780166626,
            linkElementCount: -9.189208984375,
            imageElementCount: 0.24006086587905884,
            anchorMarkerCount: -2.4239299297332764
          }
        },
        "3": {
          bias: -8.217131614685059,
          weights: {
            widthPercentage: 3.1043407917022705,
            heightPercentage: 2.778254747390747,
            dom_level: 5.23941707611084,
            textBodyPercentage: 17.00290298461914,
            relativeTextPercentage: 0.39719265699386597,
            childElementCount: -1.8654308319091797,
            siblingsCount: 26.381895065307617,
            linkElementCount: -6.911229610443115,
            imageElementCount: 28.412471771240234,
            anchorMarkerCount: 23.788818359375
          }
        }
      },
      {
        "0": {
          bias: 1.7489553689956665,
          weights: {
            "0": -6.615390777587891,
            "1": -18.44009017944336,
            "2": -9.455074310302734,
            "3": 3.7956278324127197
          }
        },
        "1": {
          bias: -6.329704284667969,
          weights: {
            "0": -18.472301483154297,
            "1": 20.08295440673828,
            "2": -16.726089477539062,
            "3": 0.5286045074462891
          }
        },
        "2": {
          bias: -26.53404426574707,
          weights: {
            "0": 27.380231857299805,
            "1": -22.670103073120117,
            "2": 9.186319351196289,
            "3": 20.50315284729004
          }
        },
        "3": {
          bias: -0.7331539392471313,
          weights: {
            "0": -17.552757263183594,
            "1": 18.57866096496582,
            "2": 12.728407859802246,
            "3": -23.96059799194336
          }
        }
      }
    ],
    outputLookup: false,
    inputLookup: true,
    activation: "sigmoid",
    trainOpts: {
      iterations: 20000,
      errorThresh: 0.0005,
      log: true,
      logPeriod: 500,
      learningRate: 0.3,
      momentum: 0.1,
      callbackPeriod: 10
    }
  }
};
