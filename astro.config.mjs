// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tylerx404.github.io',
	base: '/e-hutech-scios',
	image: {
		domains: ['tylerx404.github.io'],
		remotePatterns: [{ protocol: 'https' }],
	},
	integrations: [
		starlight({
			title: 'HUSECH',
			description: 'Phím tắt iOS hỗ trợ ứng dụng e-HUTECH - Quản lý học tập linh hoạt hơn',
			logo: {
				src: './public/assets/logo.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tylerx404/e-hutech-scios' }],
			sidebar: [
				{
					label: 'Giới thiệu',
					items: [
						{ label: 'Trang chủ', slug: 'index' },
						{ label: 'Tính năng', slug: 'features' },
					],
				},
				{
					label: 'Cài đặt',
					items: [
						{ label: 'Hướng dẫn cài đặt', slug: 'installation' },
						{ label: 'Yêu cầu hệ thống', slug: 'requirements' },
					],
				},
				{
					label: 'Khác',
					items: [
						{ label: 'So sánh với app chính thức', slug: 'comparison' },
						{ label: 'FAQ', slug: 'faq' },
					],
				},
			],
		}),
	],
});
