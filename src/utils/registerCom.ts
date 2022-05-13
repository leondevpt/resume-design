// 注册全局组件

import WEB_DEVELOP from '@/template/web/web-develop.vue'; // 前端开发简历模板组件
import ResumeTitleOptionsVue from '@/components/options/ResumeTitleOptions.vue'; // 简历标题属性设置组件

const componentList: Array<any> = [WEB_DEVELOP, ResumeTitleOptionsVue];

export default {
  install(app: any) {
    componentList.map((component) => {
      app.component(component.name, component);
    });
  }
};
