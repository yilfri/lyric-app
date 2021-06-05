import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Info from './components/Info';
import Song from './components/Song';

function App() {
	const [saveDataForm, setSaveDataForm] = useState({});
	const [lyric, setLyric] = useState('');
	const [artistInfo, setArtistInfo] = useState({});

	useEffect(() => {
		if (Object.keys(saveDataForm).length === 0) return;

		const getApiLyrics = async () => {
			const { artist, song } = saveDataForm;

			const url_lyric = `https://api.lyrics.ovh/v1/${artist}/${song}`;
			const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

			const [lyric, info] = await Promise.all([
				await axios.get(url_lyric),
				await axios.get(url_info)
			]);

			setLyric(lyric.data.lyrics);
			setArtistInfo(info.data.artists[0]);
		};

		getApiLyrics();
	}, [saveDataForm]);

	return (
		<>
			<Form setSaveDataForm={setSaveDataForm} />

			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<Info artistInfo={artistInfo} />
					</div>
					<div className="col-md-6">
						<Song lyric={lyric} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
