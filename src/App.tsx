import React, { useState } from 'react';
import classNames from 'classnames';
import GlobalStyle, { Wrapper, MiniWrapper, Header, Dialog, DialogProps } from './styles';
import CurrentDialogsData from './data/current-dialogs.json';
import ChangedDialogsData from './data/changed-dialogs.json';

const App: React.FC = () => {

	const MenuTypes = [
		{ label: 'Warning' },
		{ label: 'Question' },
		{ label: 'Information' },
		{ label: 'List' },
		{ label: 'Critical' },
	];

	const [ menuIndex, setMenuIndex ] = useState(0);

	return (
		<>
			<GlobalStyle />

			{/* HEADER */}
			<Header>
				{MenuTypes.map((item, i)=> (
					<div className={classNames("nav", menuIndex === i ? "active" : "")} onClick={()=> setMenuIndex(i)}>
						{item.label}
					</div>
				))}
			</Header>

			<Wrapper>
				<div className="column-title">Current Dialogs</div>
				{/* CURRENT DIALOGS */}
				{CurrentDialogsData.filter(item => item.API === `${MenuTypes.map((item, i)=> menuIndex === i ? `${item.label}`:"").join('').toUpperCase()}`).map((pop, i)=> (
					<MiniWrapper>
						<Dialog className={`${MenuTypes.map((item, i)=> menuIndex === i ? `${item.label}`: "").join('').toUpperCase()}`}>
							<div className="top-bar"></div>
							<div className="icon"></div>
							<h3>{pop.Title}</h3>
							<p>{pop.Description}</p>
							<div className="description-box"></div>

							{/* BUTTONS */}
							<div className="row-buttons">
								<div className="button" style={pop.Buttons.length === 0 ? {'display':'none'}:{'display':'flex'}}>{pop.Buttons}</div>
								<div className="button" style={pop.MoreButtons.length === 0 ? {'display':'none'}:{'display':'flex','margin':'0 10px 0 0'}}>{pop.MoreButtons}</div>
							</div>
						</Dialog>
						<DialogProps>
							Id: <span>{i < 10 ? '0'+i : i}</span> ⧚
							title length: <span>{pop.Title.length}</span> ⧛
							description length: <span>{pop.Description.length}</span>
						</DialogProps>
					</MiniWrapper>
				))}
			</Wrapper>

			<Wrapper>
				<div className="column-title">Changed Dialogs</div>
				{/* CHANGED DIALOGS */}
				{ChangedDialogsData.filter(item => item.API === `${MenuTypes.map((item, i)=> menuIndex === i ? `${item.label}`:"").join('').toUpperCase()}`).map((pop, i)=> (
					<MiniWrapper>
						<Dialog className={`${MenuTypes.map((item, i)=> menuIndex === i ? `${item.label}`: "").join('').toUpperCase()}`}>
							<div className="top-bar"></div>
							<div className="icon"></div>
							<h3>{pop.Title}</h3>
							<p>{pop.Description}</p>
							<div className="description-box"></div>

							{/* BUTTONS */}
							<div className="row-buttons">
								<div className="button" style={pop.Buttons.length === 0 ? {'display':'none'}:{'display':'flex'}}>{pop.Buttons}</div>
								<div className="button" style={pop.MoreButtons.length === 0 ? {'display':'none'}:{'display':'flex','margin':'0 10px 0 0'}}>{pop.MoreButtons}</div>
							</div>
						</Dialog>
						<DialogProps>
							Id: <span>{i < 10 ? '0'+i : i}</span> ⧚
							title length: <span>{pop.Title.length}</span> ⧛
							description length: <span>{pop.Description.length}</span>
						</DialogProps>
					</MiniWrapper>
				))}
			</Wrapper>
		</>
	)
}

export default App;

