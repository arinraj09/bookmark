import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in. 
  gitRepoUrl: 'https://github.com/51sec/nav',

  // Deployment branch name
  branch: 'main',

  // If routing is hash mode. if it deployed into github pages or using Vercel, it has to be set to true
  hashMode: true,

  // is it displaying the Github icon on top right corner of the web page
  showGithub: true,

  // what is your website address. It is good for your SEO
  homeUrl: 'https://nav.51sec.org',

  // Web Site Tiltle
  title: '51Sec Navigation - Collecting all interesting and using things',

  // Web Site description
  description: '51Sec Navigation - Featured and useful navigation websites - English',

  // Web Site Keyword
  keywords: 'Navigation, front-end resources, community sites, designers, practical tools, learning resources, operations, network, security',

  // Default Theme: Light | Sim | Side | App | Shortcut
  theme: 'Side',

  // The content at the bottom of the website, copyright information, record number, can be HTML
  footerContent: `
    <div><table><tbody>    <tr>
    <td><div style="font-weight: bold;">Total collected \${total} websites </div>
    <div>Copyright ©2018-2021 <a href="https://www.51sec.org" target="_blank">51Sec</a>. </div>
    <div>All Rights Reserved. </div></td>
    <td><div><a href="https://clustrmaps.com/site/1bkjt" title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=nZqvMY-A_3Qj7KbGN-LEl1dfVrc_vayiGJ6G8SeNufw&cl=ffffff"></a></div>
    </td>     </tr></tbody></table></div>    
  `,

  // Alibaba icon https://www.iconfont.cn/
  // IT will be used to show side theme's topic one level and second level menu icons Side 主题一级、二级菜单图标展示
  iconfontUrl: '//at.alicdn.com/t/font_2522843_wl70o31sy6.js',

  // Baidu statistics
  // https://tongji.baidu.com/web/welcome/login
  //baiduStatisticsUrl: 'https://hm.baidu.com/hm.js?4582be7af7e7c95ef75351e07c6c32ba',

  //CNZZ statisitics
  //https://www.cnzz.com/o_index.php
  //cnzzStatisticsUrl: 'https://new.cnzz.com/v1/login.php?siteid=1280434453',

  // Sim Theme Configuration
  simThemeConfig: {
    // Post Image
    posterImageUrls: [
      'https://raw.sevencdn.com/xjh22222228/nav/image/sim-wallpaper.jpg'
    ],
    description: 'Here collected total <b>${total}</b> websites, helping your work, living and studying'
  }
}

export default c
