import MainLayout from "@/layouts/layout";

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className="center">
                    <div className="text">
                        <h2>Професія воєного вимагає високого рівня фізичних, психологічних та професійних навичок, оскільки ця діяльність пов'язана з обороною країни, забезпеченням національної безпеки та виконанням різноманітних завдань у воєнний час чи в умовах кризи. Воєнний може служити в армії, повітряній силі, флоті чи спеціальних військових підрозділах. Ось деякі ключові аспекти цієї професії:</h2>
                        <p>Військовий тренінг: Воєнний отримує інтенсивний тренінг з фізичної підготовки, військової тактики, стрільби та інших навичок, що необхідні для ефективної служби.
                            Обладнання та зброя: Воєни володіють навичками експлуатації та обслуговування військового обладнання та зброї, також вони повинні бути експертами в їх використанні в бойових умовах.
                            Стресостійкість та відданість: Воєнний повинен виявляти високий рівень стресостійкості, адже служба в умовах конфлікту чи воєнного стану може бути надто напруженою та небезпечною.
                            Воєнна дисципліна: Важливим аспектом служби воєного є дотримання військової дисципліни та стандартів, а також відданість виконанню наказів та завдань.
                            Керівництво та командний дух: Воєнний може знаходитися в ситуаціях, де важлива командна робота та вміння приймати рішення в стрімких умовах.
                            Гуманітарні завдання: У деяких випадках воєнні можуть виконувати гуманітарні завдання, надаючи допомогу усередині чи поза межами країни в часи кризи чи катастроф.
                            Постійна навчаність: Воєнний зобов'язаний постійно удосконалювати свої навички та знання, вивчати нові технології та методи військової тактики.
                            Ця професія вимагає великої самодисципліни, відданості і відваги, оскільки воєнні часто знаходяться в ситуаціях, де їхні рішення можуть впливати на безпеку та життя інших осіб.</p>
                        <h6>Автор сайту: учень 10 класу Михайло Школа</h6>
                    </div>

                    <div className="images">
                        <img src="army.png" width={400} height={300} />
                        <div className="image-margin" />
                        <img src="army1.png" width={400} height={250} />
                    </div>
                </div>
            </MainLayout>

            <style jsx>
                {`
                    .center {
                        margin-top: 70px;
                        margin-left: 60px;
                        display: flex;
                        justify-content: left;
                    }

                    .text {
                        margin-right: 20px;
                    }

                    .images {
                        display: flex;
                        flex-direction: column;
                        margin-top: 20px;
                    }

                    .image-margin {
                      margin-bottom: 20px; 
                    }
                `}
            </style>
        </>
    );
};

export default Index;