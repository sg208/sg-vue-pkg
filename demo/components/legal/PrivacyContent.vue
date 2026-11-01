<template>
  <p class="legal__updated">Last updated 1 November 2026</p>
  <p>
    This is a static showcase for a small open source package. It has no
    accounts, no forms that send data anywhere, no analytics and no cookies.
  </p>

  <h2>What stays in your browser</h2>
  <p>
    If you pick Light or Dark in the theme switch, the site saves that choice in
    your browser's local storage under the key <code>sg208-theme</code>, so the
    next visit opens in the same theme. Picking Auto removes it. The value never
    leaves your device, and you can clear it with your browser's site data
    settings.
  </p>
  <p>
    The copy buttons write a code snippet to your clipboard when you press them.
    Nothing is read from the clipboard.
  </p>

  <h2>Who your browser talks to</h2>
  <ul>
    <li>
      <strong>Cloudflare</strong> hosts the site on a Cloudflare Worker that
      serves the static files. As the host, Cloudflare may process standard
      request logs such as your IP address, user agent and the pages you
      request.
    </li>
    <li>
      <strong>Google Fonts</strong> (<code>fonts.googleapis.com</code> and
      <code>fonts.gstatic.com</code>) supplies the Hanken Grotesk typeface.
      Loading it sends your IP address and user agent to Google.
    </li>
  </ul>
  <p>
    The links to GitHub and npm only contact those sites when you follow them.
  </p>

  <h2>Questions</h2>
  <p>
    There is no email contact. If you have a question about this page, open an
    issue on
    <a href="https://github.com/sg208/sg-vue-pkg/issues"
      >the sg-vue-pkg issue tracker on GitHub</a
    >.
  </p>
</template>
