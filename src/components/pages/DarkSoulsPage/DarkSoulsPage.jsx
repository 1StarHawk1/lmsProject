import React from 'react';
import MenuBar from "../../blocks/MenuBar/MenuBar";
import styles from '../../../styles/commonStyles.module.css';
import firekeeper from './images/firekeeper.jpg';
import gwyn from './images/gwyn.jpg';

const DarkSoulsPage = () => {
    return (
        <div>
            <div className={styles.mainpage}>
                <div><MenuBar/></div>
                <div className={styles.content}>
                    <section id="showcase">
                        <div className="container">
                            <h1>Dark Souls</h1>
                            <p>Погрузитесь в мрачный и таинственный мир Dark Souls</p>
                        </div>
                    </section>
                    <hr/>

                    <div className="content container">
                        <section id="about">
                            <h2>О Dark Souls</h2>
                            <p>Dark Souls – это серия экшен-ролевых игр, разработанная компанией FromSoftware и изданная
                                Bandai
                                Namco Entertainment. Игры известны своей высокой сложностью, глубоким и запутанным
                                лором, а
                                также уникальной атмосферой, которая сочетает в себе элементы фэнтези и ужаса. Игроки
                                берут на
                                себя роль некоего Неизбранного, который должен исследовать мир, полный опасностей и
                                врагов,
                                чтобы выполнить свою судьбу.</p>
                            <img src={firekeeper} alt={'Dark Souls'} style={{width: '80%'}}/>
                        </section>

                        <section id="games">
                            <h2>Игры серии Dark Souls</h2>
                            <br/>
                            <h3 style={{margin: '5px', marginBottom: '5px'}}>Dark Souls</h3>

                            <p>Первая игра серии, выпущенная в 2011 году, представила игрокам страну Лордран, где они
                                сталкиваются с разнообразными врагами и боссами, исследуя руины древнего
                                королевства.</p>
                            <br/>
                            <h3 style={{margin: '5px', marginBottom: '5px'}}>Dark Souls II</h3>
                            <p>Вторая часть серии вышла в 2014 году и принесла улучшенную графику, новые механики и еще
                                более
                                сложные испытания. Действие игры разворачивается в королевстве Дранглик, который
                                наполнен
                                новыми
                                секретами и опасностями.</p>
                            <br/>
                            <h3 style={{marginTop: '5px', marginBottom: '5px'}}>Dark Souls III</h3>
                            <p>Заключительная часть трилогии, выпущенная в 2016 году, объединяет элементы из предыдущих
                                игр и
                                представляет королевство Лотрик, где игроки снова сражаются с мощными врагами и
                                раскрывают
                                тайны
                                вселенной Dark Souls.</p>
                            <br/>
                        </section>

                        <section id="mechanics">
                            <h2>Геймплей и Механики</h2>
                            <p>Dark Souls известна своей уникальной боевой системой, которая требует от игроков
                                точности,
                                терпения и тактики. Уклонения, блокирование и контратаки играют ключевую роль в
                                сражениях. Также
                                важным элементом игры является система костров, которые служат точками сохранения и
                                восстановления, но одновременно возрождают всех обычных врагов в локации.</p>
                            <img src={gwyn} alt={'Dark Souls'} style={{width: '80%'}}/>
                        </section>

                        <section id="lore">
                        <h2>Лор и История</h2>
                            <p>Лор Dark Souls представлен через описания предметов, диалоги с NPC и окружение. История
                                игры
                                глубока и многослойна, часто оставляя игрокам пространство для интерпретаций. Основные
                                темы
                                включают упадок цивилизаций, циклы света и тьмы, а также борьбу за власть и
                                выживание.</p>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DarkSoulsPage;