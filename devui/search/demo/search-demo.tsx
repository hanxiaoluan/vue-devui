import { defineComponent } from 'vue'
import { useDemo } from 'hooks/use-demo';
import DemoBasic from './demo-basic';
import DemoBasicCode from './demo-basic?raw';
import './search-demo.scss';

export default defineComponent({
  render () {
    return useDemo([
      {
        id: 'demo-basic',
        title: '基本用法',
        code: DemoBasicCode,
        content: <DemoBasic></DemoBasic>
      }
    ]);
  }
})