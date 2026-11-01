<template>
  <section
    id="components"
    class="section components"
    aria-labelledby="components-title"
  >
    <div class="wrap">
      <h2 id="components-title" class="section-title">Components</h2>
      <p class="section-lead">
        Import the stylesheet once, then the components wherever you need them.
      </p>
      <pre class="components__setup"><code>{{ setupCode }}</code></pre>

      <article
        v-for="doc in componentDocs"
        :id="doc.id"
        :key="doc.id"
        class="component-doc"
        :aria-labelledby="`${doc.id}-title`"
      >
        <div class="component-doc__intro">
          <h3 :id="`${doc.id}-title`">{{ doc.name }}</h3>
          <p>{{ doc.summary }}</p>
          <div class="component-doc__examples" data-ui>
            <template v-if="doc.name === 'SgButton'">
              <SgButton>Save changes</SgButton>
              <SgButton aria-label="Add item">
                <PlusIcon />
              </SgButton>
              <SgButton disabled>Saving…</SgButton>
            </template>
            <template v-else>
              <SgButtonText text="Cancel" />
              <SgButtonText text="Next"><ArrowIcon /></SgButtonText>
              <SgButtonText text="Archive" disabled />
            </template>
          </div>
        </div>
        <div class="component-doc__api">
          <pre><code>{{ doc.usage }}</code></pre>
          <ApiTable
            :caption="`${doc.name} API`"
            :rows="[...doc.props, ...sharedApi]"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SgButton, SgButtonText } from "../../src";
import ApiTable from "./ApiTable.vue";
import { ArrowIcon, PlusIcon } from "./icons";
import { componentDocs, sharedApi } from "../data/api";

const setupCode = `import "sg208-button/style.css";
import { SgButton, SgButtonText } from "sg208-button";`;
</script>
