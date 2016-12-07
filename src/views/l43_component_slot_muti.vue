<script>
  export default {
    components: {
      'app-layout': {
        template: `
          <div class="container">
            <header>
              <slot name="header"></slot>
            </header>
            <main>
              <slot></slot>
            </main>
            <footer>
              <slot name="footer"></slot>
            </footer>
          </div>`
      }
    }
  }
</script>

<template>
  <app-layout>
    <h1 slot="header">Here might be a page title</h1>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
    <p slot="footer">Here's some contact info</p>
  </app-layout>
</template>