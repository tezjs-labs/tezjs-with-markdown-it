import MarkdownIt from "markdown-it";

export default function(vue:any){
    vue.config.globalProperties.$md = new MarkdownIt()
    vue.use(vue.config.globalProperties,'$md', {});
}