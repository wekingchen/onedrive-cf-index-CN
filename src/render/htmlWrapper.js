import { favicon } from './favicon'
import { userProfile } from './userProfile'

const COMMIT_HASH = '89afde99425f90047d6cde015bb90ab7d5b64b2f'

export function renderHTML(body, paginationLink) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <title>${userProfile.title}</title>
      <link rel="shortcut icon" type="image/png" sizes="16x16" href="${favicon}" />
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/spencerwooo/onedrive-cf-index@${COMMIT_HASH}/themes/spencer.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@gh-pages/github-markdown.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/spencerwooo/onedrive-cf-index@${COMMIT_HASH}/themes/prism-github.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js" data-manual></script>
      <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/plugins/autoloader/prism-autoloader.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/turbolinks@5.2.0/dist/turbolinks.min.js"></script>
    </head>
    <body>
      <nav id="navbar" data-turbolinks-permanent><div class="brand">${userProfile.navTitle}</div></nav>
      ${body}
      <div id="flex-container" data-turbolinks-permanent style="flex-grow: 1;"></div>
      <footer id="footer" data-turbolinks-permanent>${userProfile.footerContent}</footer>
      <script>
        Turbolinks.start()
        Prism.highlightAll()
        mediumZoom('[data-zoomable]')
        window.pLink = ${paginationLink}
        
        function handlePagination(isNext) {
          isNext ? pLink.active = pLink.next : pLink.active = pLink.previous
          fetch(location.href, { 
            method: 'PUT', 
            body: JSON.stringify({ pLink })
          })
        }
      </script>
    </body>
  </html>`
}
