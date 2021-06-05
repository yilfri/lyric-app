import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {
	const [saveDataForm, setSaveDataForm] = useState({});
	const [lyric, setLyric] = useState('');

	useEffect(() => {
		if (Object.keys(saveDataForm).length === 0) return;

		const getApiLyrics = async () => {
			const { artist, song } = saveDataForm;

			const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
			const res = await axios.get(url.data.lyrics);

			setLyric(res);
		};
		getApiLyrics();
	}, [saveDataForm]);

	return (
		<>
			<Form setSaveDataForm={setSaveDataForm} />
		</>
	);
}

export default App;
