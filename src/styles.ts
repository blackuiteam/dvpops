import styled, { createGlobalStyle } from 'styled-components';
import iconWarning from './img/icon-warning.png';
import iconQuestion from './img/icon-question.png';
import iconCritical from './img/icon-critical.png';
import openSans200 from './fonts/opensans-200.ttf';
import openSans300 from './fonts/opensans-300.ttf';
import openSans400 from './fonts/opensans-400.ttf';
import openSans600 from './fonts/opensans-600.ttf';

export default createGlobalStyle `
	@font-face {
		font-family: 'opensans light';
		font-style: normal;
		font-weight: 200;
		src: url(${openSans200});
	}

	@font-face {
		font-family: 'openSans regular';
		font-style: normal;
		font-weight: 300;
		src: url(${openSans300});
	}

	@font-face {
		font-family: 'opensans semibold';
		font-style: normal;
		font-weight: 400;
		src: url(${openSans400});
	}

	@font-face {
		font-family: 'opensans bold';
		font-style: normal;
		font-weight: 600;
		src: url(${openSans600});
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border;
		font-family: 'opensans regular', sans-serif;
		color: #fff;
	}

	body {
		background: #222;
		-webkit-font-smoothing: antialiased;
	}

	#root {
		display: table;
		width: auto;
		height: 100vh;
		margin: 0 auto;
	}

`

export const Header = styled.div`
	display: block;
	max-width: 600px;
	height: 60px;
	margin: 20px auto;
	background-color: #000;

	input {
		color: #000;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: center;
		float: left;
		width: 120px;
		height: 100%;
		cursor: default;

		&.active {
			background-color: ivory;
			color: #000;
		}
	}
`

export const Wrapper = styled.div `
	display: grid;
	position: relative;
	float: left;
	grid-template-columns: repeat(1, 1fr);
	grid-row-gap: 2rem;
	grid-column-gap: 1rem;
	width: 580px;
	padding: 1rem 0;

	&:nth-child(2) {
		border-right: 1px solid #3E4349;
	}

	.column-title {
		display: grid;
		align-items: center;
		justify-content: center;
		width: 530px;
		height: 60px;
		font-family: 'opensans bold';
		font-size: 20px;
		margin: auto;
		border: 1px solid #3E4349;
	}
`

export const MiniWrapper = styled.div `
	display: block;
	width: 530px;
	margin: auto;
`

export const Dialog = styled.div`
	display: block;
	float: left;
	position: relative;
	margin: auto;
	background-color: #28282E;
	border: 1px solid #000;

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: cal(100% - 10px);
		height: 30px;
		background-color: #212126;
		border-bottom: 1px solid #000;
		font-size: 11px;
		padding: 0 0 0 10px;
	}

	h3 {
		position: relative;
		margin: 25px 30px 0 100px;
		font-family: 'opensans semibold';
		font-size: 16px;
	}

	p {
		position: relative;
		margin: 12px 30px 30px 100px;
		font-family: 'opensans regular';
		font-size: 12px;
		color: #929292;
	}

	.row-buttons {
		display: inline-flex;
		flex-direction: row-reverse;
		width: calc(100% - 20px);
		height: 22px;
		margin: 0 0 20px 0;

		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 118px;
			height: 22px;
			font-size: 12px;
			color: #929292;
			border-radius: 14px;
			border: 1px solid #3E4349;
			transition: .2s;

			&:hover {
				border: 1px solid #E64B3D;
			}
		}
	}

	&.WARNING {
		width: 530px;
		height: auto;

		.icon {
			position: absolute;
			top: 60px;
			left: 30px;
			width: 52px;
			height: 52px;
			background: url(${iconWarning}) no-repeat center;
			background-size: 52px 52px;
		}
	}

	&.QUESTION {
		width: 530px;
		height: auto;

		.icon {
			position: absolute;
			top: 60px;
			left: 30px;
			width: 52px;
			height: 52px;
			background: url(${iconQuestion}) no-repeat center;
			background-size: 52px 52px;
		}
	}

	&.INFORMATION {
		width: 460px;
		height: auto;

		h3 {
			margin: 30px 30px 0 30px;
		}

		p {
			margin: 12px 30px 0 30px;
		}
	}

	&.LIST {
		width: 460px;
		height: auto;
		/* margin: 0 0 0 30px; */

		h3 {
			margin: 30px 30px 0 30px;
		}

		p {
			margin: 12px 30px 30px 30px;
		}

		.description-box {
			display: table;
			margin: 0 0 20px 30px;
			width: 400px;
			height: 86px;
			background-color: #1F1F1F;
			border: 1px solid #000;
		}
	}

	&.CRITICAL {
		width: 530px;
		height: auto;

		.icon {
			position: absolute;
			top: 60px;
			left: 30px;
			width: 49px;
			height: 42px;
			background: url(${iconCritical}) no-repeat center;
			background-size: 49px 42px;
		}
	}
`

export const DialogProps = styled.div`
	display: inline-grid;
	align-items: center;
	width: auto;
	height: 40px;
	margin: 5px 0 20px 0;
	padding: 0 10px;
	clear: both;
	background-color: #000;
	font-size: 13px;

	span {
		display: contents;
		float: left;
		font-weight: 600;
		font-size: 16px;
	}
`
