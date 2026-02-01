// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import uiTweaks from 'starlight-ui-tweaks';

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
			customCss: ['./src/styles.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tylerx404/e-hutech-scios' }],
			plugins: [
				uiTweaks({
					navbarLinks: [
						{ label: 'GitHub', href: 'https://github.com/Tylerx404/e-hutech-scios' },
						{ label: 'Tải xuống', href: '/installation' },
					],
					footer: {
						copyright: 'HUSECH. All rights reserved.',
						firstColumn: {
							title: 'Sản phẩm',
							links: [
								{ label: 'Tính năng', href: '/features' },
								{ label: 'FAQ', href: '/faq' },
							],
						},
						secondColumn: {
							title: 'Hỗ trợ',
							links: [
								{ label: 'Hướng dẫn', href: '/installation' },
								{ label: 'GitHub', href: 'https://github.com/Tylerx404/e-hutech-scios' },
							],
						},
						thirdColumn: {
							title: 'Pháp lý',
							links: [
								{ label: 'Giấy phép', href: 'https://github.com/Tylerx404/e-hutech-scios/blob/main/LICENSE' },
							],
						},
						fourthColumn: {
							title: 'Liên hệ',
							links: [
								{ label: 'GitHub Issues', href: 'https://github.com/Tylerx404/e-hutech-scios/issues' },
							],
						},
						showSocialIcons: true,
					},
				}),
			],
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
