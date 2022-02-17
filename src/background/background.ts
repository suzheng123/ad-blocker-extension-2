chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url
    /*
     * can refer https://easylist.to for more adBlock filters
     */
    const filters = ['googleadservices', 'googlesyndication', 'g.doubleclick']
    for (const filter of filters) {
      // if the url matches any element in the filters[] list
      if (url.indexOf(filter) != -1) {
        // console log the ad-sever
        console.log(url)
        return {
          cancel: true,
        }
      }
    }
    return {
      cancel: false,
    }
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking']
)
