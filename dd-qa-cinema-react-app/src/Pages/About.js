import React from "react";

const About = () => {
    document.title = 'About';

    return(
        <div>
            <h1>About Our Team</h1>
            <p>We are Team DD. A group of 6 developers who have created QA Cinema</p>
            <p>Loremim Ipsum</p>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Github</th>
                            <th>Email</th>
                            <th>Twitter Handle</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <div>
                <button>
                    To get in touch with our team follow this link.
                </button>
            </div>
        </div>
        
    );
}

export default About;