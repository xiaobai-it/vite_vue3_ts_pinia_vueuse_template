import { defineConfig } from 'vite'; // 用来做vite的语法提示的
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
// element plus的按需引入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// element plus的按需引入

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名,用来快速指定文件
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    envPrefix: 'MYPROJECT_',
});
