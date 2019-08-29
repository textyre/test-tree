import { css } from 'astroturf'

export const styles = css`
	@import '@shared/styles/colors.scss';

	body {
		margin: 0;
		background-color:: $app_bg_color;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	}

	.app {
		height: 100vh;
		background-color: $app_bg_color;
	}
`
