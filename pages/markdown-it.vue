<script>
// import MarkdownIt from "markdown-it";
import headerComponent from "/@/components/header.vue";
import footerComponent from "/@/components/footer.vue";

export default {
  components: {
    headerComponent,
    footerComponent,
  },
  data() {
    return {
      content: `# Your markdown content `,
      markdownContent: "",
    };
  },
  mounted() {
    this.markdownContent = this.$md.render(this.content);
  },
  options: {
    markdownIt: {
      linkify: true,
    },
    linkAttributes: {
      attrs: {
        target: "_blank",
        rel: "noopener",
      },
    },
    head: {
      title: "markdown",
    },
  },
};
</script>

<template>
  <div>
    <headerComponent />
    <h1 class="text-3xl text-center my-10">{{ markdownContent }}</h1>
  </div>
</template>

