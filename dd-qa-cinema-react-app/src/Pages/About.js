import React from "react";
import "./About.css"
const About = () => {
    document.title = 'About';

    return(
        <body>
            <div className="bodyContainer">
            <h1>About Our Team</h1>
            <p>We are Team DD. A group of 6 developers who have created QA Cinema</p>
                <table>
                        <tr>
                            <th>Name</th>
                            <th>Github</th>
                            <th>Email</th>
                            <th>Twitter Handle</th>
                        </tr>
                        <tr>
                            <td>Daniyal</td>
                            <td><a href="https://github.com/dzza1800" target="_blank">Daniyal's Github</a></td>
                            <td><a href="mailto:dabbas@qa.com?subject=What is up!">Daniyal's Mail</a></td>
                            <td>Tweet this ****</td>
                        </tr>
                        <tr>
                            <td>Tasdiq</td>
                            <td><a href="https://github.com/Tasdiq-Dewan" target="_blank">Tasdiq's Github</a></td>
                            <td><a href="mailto:tdewan@qa.com?subject=What is up!">Tasdiq's Mail</a></td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Jabaran</td>
                            <td><a href="https://github.com/JabKhan23" target="_blank">Jabaran's Github</a></td>
                            <td><a href="mailto:jkhan@qa.com?subject=What is up!">Jabaran's Mail</a></td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Uche</td>
                            <td><a href="https://github.com/saintUche" target="_blank">Uche's Github</a></td>
                            <td><a href="mailto:uegbon@qa.com?subject=What is up!">Uche's Mail</a></td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Paul</td>
                            <td><a href="https://github.com/tigerFish29" target="_blank">Paul's Github</a></td>
                            <td><a href="mailto:pchabinga@qa.com?subject=What is up!">Paulie's Mail</a></td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Daniel</td>
                            <td><a href="https://github.com/Dsoftwaredev" target="_blank">Daniel's Github</a></td>
                            <td><a href="mailto:dmwalker@qa.com?subject=What is up!">Daniel's Mail</a></td>
                            <td>Loreum</td>
                        </tr>
                   
                </table>
    <br></br>
                <table>
                <tr>
                            <th>Daniyal</th>
                            <th>Tasdiq</th>
                            <th>Jabaran</th>
                            <th>Uche</th>
                            <th>Paul</th>
                            <th>Daniel</th>
                </tr>

                <tr>
                    <td><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCCtrHXg0aQ/company-logo_200_200/0/1656669580208?e=2147483647&v=beta&t=4oylmba5mC1uN56zZ3gyGawzIMM6qgNYkwMbF-eeznw"></img></td>
                    <td><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCCtrHXg0aQ/company-logo_200_200/0/1656669580208?e=2147483647&v=beta&t=4oylmba5mC1uN56zZ3gyGawzIMM6qgNYkwMbF-eeznw"></img></td>
                    <td><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCCtrHXg0aQ/company-logo_200_200/0/1656669580208?e=2147483647&v=beta&t=4oylmba5mC1uN56zZ3gyGawzIMM6qgNYkwMbF-eeznw"></img></td>
                    <td><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCCtrHXg0aQ/company-logo_200_200/0/1656669580208?e=2147483647&v=beta&t=4oylmba5mC1uN56zZ3gyGawzIMM6qgNYkwMbF-eeznw"></img></td>
                    <td><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCCtrHXg0aQ/company-logo_200_200/0/1656669580208?e=2147483647&v=beta&t=4oylmba5mC1uN56zZ3gyGawzIMM6qgNYkwMbF-eeznw"></img></td>
                    <td><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHuCCtrHXg0aQ/company-logo_200_200/0/1656669580208?e=2147483647&v=beta&t=4oylmba5mC1uN56zZ3gyGawzIMM6qgNYkwMbF-eeznw"></img></td>
                </tr>
                <tr>
                    <td>Full Stack Engineer</td>
                    <td>Git-Hub Master, Back-end and Tester</td>
                    <td>Full Stack Engineer</td>
                    <td>Full Stack Engineer</td>
                    <td>Front-end and Tester</td>
                    <td>Scrum Master, Front-end and Tester</td>
                </tr>
                </table>
                </div>

        </body>
        
    );
}

export default About;