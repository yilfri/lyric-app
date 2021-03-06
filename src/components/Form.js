import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ setSaveDataForm }) => {
	const [dataForm, setDataForm] = useState({
		artist: '',
		song: ''
	});

	const [error, setError] = useState(false);

	const { artist, song } = dataForm;

	const handleChange = (e) => {
		setDataForm({
			...dataForm,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (artist.trim() === '' || song.trim() === '') {
			setError(true);
			return;
		}
		setError(false);
		setSaveDataForm(dataForm);
	};

	return (
		<div className="bg-info">
			<div className="container">
				<div className="row">
					<form
						className="col card text-white bg-transparent mb-5 pt-5 pb-2"
						onSubmit={handleSubmit}
					>
						{error ? (
							<p className="alert alert-danger text-center p-2">
								Todos los campos son obligatorios
							</p>
						) : null}
						<fieldset>
							<legend className="text-center">Buscador Letras Canciones</legend>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Artista</label>
										<input
											type="text"
											name="artist"
											placeholder="Nombre Artista"
											className="form-control"
											onChange={handleChange}
											value={artist}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Artista</label>
										<input
											type="text"
											name="song"
											placeholder="Nombre Canción"
											className="form-control"
											onChange={handleChange}
											value={song}
										/>
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-primary float-right">
								Buscar
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

Form.propTypes = {
	setSaveDataForm: PropTypes.func.isRequired
};

export default Form;
