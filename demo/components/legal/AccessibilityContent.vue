<template>
  <p class="legal__updated">Last updated 1 November 2026</p>
  <p>
    I want this showcase and the two buttons it documents to work for people who
    use a keyboard, a screen reader, zoom or reduced motion. The target is WCAG
    2.2 level AA.
  </p>

  <h2>What the site does</h2>
  <ul>
    <li>
      Every page has a skip link, a header, a main region and a footer, and one
      top-level heading.
    </li>
    <li>
      Links, buttons and the theme switch can all be reached and used with a
      keyboard. Keyboard focus shows a visible outline.
    </li>
    <li>
      The theme switch is a group of radio buttons with a label, so it can be
      changed from the keyboard and is announced as one control.
    </li>
    <li>
      When you copy a code snippet, a status message tells screen reader users
      whether it worked.
    </li>
    <li>
      Entrance animations and smooth scrolling switch off when your system asks
      for reduced motion.
    </li>
    <li>
      The page follows your system's light or dark setting, or you can pick one.
    </li>
    <li>The layout works on screens as narrow as 320 pixels.</li>
  </ul>

  <h2>What the buttons do</h2>
  <p>
    <code>SgButton</code> and <code>SgButtonText</code> each render one native
    <code>&lt;button&gt;</code>, so Enter, Space and <code>disabled</code> work
    the way the browser intends. The default colours meet AA contrast for labels
    in light and dark, targets are at least 44 pixels tall, and the
    <code>ariaLabel</code> prop names icon-only buttons. Unit tests check that
    the label reaches <code>aria-label</code> and that native attributes such as
    <code>disabled</code> reach the button.
  </p>

  <h2>Known problems</h2>
  <ul>
    <li>
      The showcase needs JavaScript. Without it you only see a short note that
      gives the address of the repository on GitHub.
    </li>
    <li>
      On screens narrower than 40rem the token tables are restyled as blocks.
      Some browser and screen reader pairs, such as Safari with VoiceOver, may
      then stop reading them as tables.
    </li>
    <li>
      Some sections fade in as you scroll, including ones that hold controls.
      The content is never hidden, and the effect is off under reduced motion.
    </li>
    <li>
      Nobody has audited the site with assistive technology yet. The checks so
      far are by hand and in unit tests.
    </li>
  </ul>

  <h2>Report a problem</h2>
  <p>
    If something gets in your way, please open an issue on
    <a href="https://github.com/sg208/sg-vue-pkg/issues"
      >the sg-vue-pkg issue tracker on GitHub</a
    >. Say which page, which browser and which assistive technology you were
    using, and I will look at it.
  </p>
</template>
