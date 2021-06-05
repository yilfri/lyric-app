import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';

function App() {
	const [saveDataForm, setSaveDataForm] = useState({});
	const [lyric, setLyric] = useState('');

	useEffect(() => {
		if (Object.keys(saveDataForm).length === 0) return;

		const getApiLyrics = async () => {
			const { artist, song } = saveDataForm;

			const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
			const res = await axios.get(url);

			setLyric(res.data.lyrics);
		};
		getApiLyrics();
	}, [saveDataForm]);

	return (
		<>
			<Form setSaveDataForm={setSaveDataForm} />

			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6"></div>
					<div className="col-md-6">
						<Song lyric={lyric} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
