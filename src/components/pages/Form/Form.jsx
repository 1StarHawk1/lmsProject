import React, {useState} from 'react';
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Button,
    FormControl,
    FormLabel,
    Modal
} from '@mui/material';
import MenuBar from '../../blocks/MenuBar/MenuBar';
import styles from '../../../styles/commonStyles.module.css';
import formStyles from './Form.module.css';

const MyForm = () => {
    const [name, setName] = useState('');
    const [favoriteGame, setFavoriteGame] = useState('');
    const [playedGames, setPlayedGames] = useState([]);
    const [comment, setComment] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const games = ['Dark Souls', 'Elden Ring', 'Sekiro', 'BloodBorne'];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !favoriteGame || playedGames.length === 0) {
            setModalMessage('Пожалуйста, заполните все обязательные поля');
            setModalOpen(true);
        } else {
            setModalMessage('Успешная отправка формы');
            setModalOpen(true);
        }
    };

    const handleClose = () => setModalOpen(false);

    return (
        <div>
            <div className={styles.mainpage}>
                <MenuBar/>

                <div className={styles.content}>
                    <form className={formStyles.formContainer} onSubmit={handleSubmit}>
                        <TextField label="Имя" value={name} onChange={(e) => setName(e.target.value)} required/>

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Любимые игры *</FormLabel>
                            <RadioGroup name="favoriteGame" value={favoriteGame}
                                        onChange={(e) => setFavoriteGame(e.target.value)} required>
                                {games.map((game, index) => (
                                    <FormControlLabel key={index} value={game} control={<Radio/>} label={game}/>
                                ))}
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Игры, в которые вы играли</FormLabel>
                            {games.map((game, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={playedGames.includes(game)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setPlayedGames([...playedGames, game]);
                                                } else {
                                                    setPlayedGames(playedGames.filter(g => g !== game));
                                                }
                                            }}
                                        />
                                    }
                                    label={game}
                                />
                            ))}
                        </FormControl>

                        <TextField label="Комментарий" multiline rows={4} value={comment}
                                   onChange={(e) => setComment(e.target.value)}/>

                        <Button style={{backgroundColor: '#C03221'}} type="submit" variant="contained" color="primary">
                            Отправить
                        </Button>
                    </form>
                </div>
            </div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div style={{backgroundColor: 'white', padding: '20px'}}>
                    <h2 id="modal-title">Отправка формы</h2>
                    <p id="modal-description">{modalMessage}</p>
                    <Button onClick={handleClose}>Закрыть</Button>
                </div>
            </Modal>


        </div>
    );
};

export default MyForm;