import styled, { createGlobalStyle } from 'styled-components';
import iconWarning from './img/icon-warning.png';
import iconQuestion from './img/icon-question.png';
import iconCritical from './img/icon-critical.png';

export default createGlobalStyle `
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border;
		font-family: 'Roboto', sans-serif;
		color: #fff;
	}

	body {
		background: #222;
		-webkit-font-smoothing: antialiased;
	}
`

export const Header = styled.div`
	display: block;
	max-width: 600px;
	height: 60px;
	margin: auto;
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
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: 2rem;
	grid-column-gap: 1rem;
	place-items: center;
	max-width: 1690px;
	margin: 10px auto;
	padding: 1rem 0;
`

export const MiniWrapper = styled.div `
	display: block;
	width: 530px;
	height: auto;
`

export const Dialog = styled.div`
	display: block;
	float: left;
	position: relative;
	margin: 0;
	background-color: #28282E;
	border: 1px solid #000;

	.top-bar {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: cal(100% - 10px);
		height: 30px;
		background-color: #37393E;
		border-bottom: 1px solid #000;
		font-size: 11px;
		padding: 0 0 0 10px;
	}

	h3 {
		position: relative;
		margin: 25px 30px 0 100px;
		font-size: 16px;
	}

	p {
		position: relative;
		margin: 12px 30px 0 100px;
		font-size: 12px;
		color: #929292;
	}

	.row-buttons {
		display: inline-flex;
		flex-direction: row-reverse;
		position: absolute;
		bottom: 20px;
		right: 20px;
		width: calc(100% - 40px);
		height: auto;

		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 118px;
			height: 26px;
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
		display: block;
		width: 530px;
		height: 220px;

		.icon {
			position: absolute;
			top: 60px;
			left: 30px;
			width: 52px;
			height: 48px;
			background: url(${iconWarning}) no-repeat center;
			background-size: 52px 52px;
		}
	}

	&.QUESTION {
		width: 530px;
		height: 248px;

		.icon {
			position: absolute;
			top: 60px;
			left: 30px;
			width: 52px;
			height: 48px;
			background: url(${iconQuestion}) no-repeat center;
			background-size: 52px 52px;
		}
	}

	&.INFORMATION {
		width: 460px;
		height: 208px;

		h3 {
			margin: 30px 30px 0 30px;
		}

		p {
			margin: 12px 30px 0 30px;
		}
	}

	&.LIST {
		width: 460px;
		height: 308px;

		h3 {
			margin: 30px 30px 0 30px;
		}

		p {
			margin: 12px 30px 0 30px;
		}

		.description-box {
			display: table;
			position: absolute;
			bottom: 76px;
			left: 30px;
			width: 400px;
			height: 86px;
			background-color: #1F1F1F;
			border: 1px solid #000;
		}
	}

	&.CRITICAL {
		width: 530px;
		height: 240px;

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
