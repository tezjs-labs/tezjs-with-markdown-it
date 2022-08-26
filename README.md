# Tezjs with markdown-it

- Create fresh Tezjs project 

- Add markdown it in your application  

```
  npm install markdown-it
```

- Now make one plugin directory and add one default function add make a new object of markdown-it and register as a global property. See below code for reference.

```
  export default function(vue:any) {
    vue.config.globalProperties.$md = new MarkdownIt()
    vue.use(vue.config.globalProperties,'$md', {});
}
```

- Now you can use global property in your component. Use render function to render markdown.

```
 this.markdownContent = this.$md.render(this.content);
```