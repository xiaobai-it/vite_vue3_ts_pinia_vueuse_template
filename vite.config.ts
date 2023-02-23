import { defineConfig, loadEnv } from 'vite' // 用来做vite的语法提示的
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
	build: () => {
		return { ...viteBaseConfig, ...viteProdConfig } // 写法一
		// return Object.assign({}, viteBaseConfig, viteProdConfig); // 写法二
	},
	serve: () => {
		console.log('开发环境')
		return Object.assign({}, viteBaseConfig, viteDevConfig)
	},
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
	// command === 'serve'是开发环境  command === 'build'是生产环境
	// mode===>就是开发模式，例如：development、production
	// console.log('process===>', process.env.NODE_ENV);
	// 当前env文件所在的目录，loadEnv()方法中第二个参数不是必须使用process.cwd()的
	const env = loadEnv(mode, process.cwd(), '')
	// console.log('env===>', env);
	return envResolver[command]()
})
