export default [
	{
		root: true, // 프로젝트 루트 디렉토리에서 ESLint 설정을 적용합니다.
		extends: [
			'eslint:recommended',
			'plugin:vue/vue3-recommended',
			'airbnb-base',
			'airbnb-typescript/base',
		],
		parserOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true,
			},
			project: './tsconfig.json',
		},
		rules: {
			'no-undef': 'off', // TypeScript에서 자동 import를 처리하기 위해 이 규칙을 끄는 것이 좋습니다.
			'no-unused-vars': 'off',
			'vue/no-unused-vars': 'error',
			'vue/require-default-prop': 'off',
		},
	}
]