import React from 'react';

const Form = () => {
	return (
		<div className="bg-info">
			<div className="container">
				<div className="row">
					<form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
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

export default Form;
