import React, {useEffect, useState} from 'react';
import styles from './MenuBar.module.css';
import {List, ListItem} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1000 : false);
    const checkSize = () => {
        setIsOpen(window.innerWidth >= 800);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={isOpen ? styles.open : styles.menubar}>
            <Button onClick={toggleMenu} style={{backgroundColor: '#AE7A19'}} className={styles.MenuButton}
                    variant="contained">
                {isOpen ? 'Закрыть' : 'Открыть'}
            </Button>
            {isOpen && (
                <List className={styles.MuiList}>
                    <ListItem className={styles.MuiListItem}>
                        <Link className={styles.MuiLink} to={"/"}>
                            <Button style={{backgroundColor: '#C03221'}} className={styles.MuiButton}
                                    variant="contained">Главная</Button>
                        </Link>
                    </ListItem>

                    <ListItem className={styles.MuiListItem}>
                        <Link className={styles.MuiLink} to={"/darksouls"}>
                            <Button style={{backgroundColor: '#C03221'}} className={styles.MuiButton}
                                    variant="contained">Dark Souls</Button>
                        </Link>
                    </ListItem>
                    <ListItem className={styles.MuiListItem}>
                        <Link className={styles.MuiLink} to={"/eldenring"}>
                            <Button style={{backgroundColor: '#C03221'}} className={styles.MuiButton}
                                    variant="contained"
                            >Elden Ring</Button>
                        </Link>
                    </ListItem>
                    <ListItem className={styles.MuiListItem}>
                        <Link className={styles.MuiLink} to={"/bloodborne"}>
                            <Button style={{backgroundColor: '#C03221'}} className={styles.MuiButton}
                                    variant="contained"
                            >BloodBorne</Button>
                        </Link>
                    </ListItem>
                    <ListItem className={styles.MuiListItem}>
                        <Link className={styles.MuiLink} to={"/sekiro"}>
                            <Button style={{backgroundColor: '#C03221'}} className={styles.MuiButton}
                                    variant="contained"
                            >Sekiro</Button>
                        </Link>
                    </ListItem>
                    <ListItem className={styles.MuiListItem}>
                        <Link className={styles.MuiLink} to={"/form"}>
                            <Button style={{backgroundColor: '#C03221'}} className={styles.MuiButton}
                                    variant="contained"
                            >Анкета</Button>
                        </Link>
                    </ListItem>
                </List>
            )}
        </div>
    );
};

export default MenuBar;