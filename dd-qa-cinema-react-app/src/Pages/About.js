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
                            <td>Lorem</td>
                            <td>Ipsum</td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Tasdiq</td>
                            <td>Lorem</td>
                            <td>Ipsum</td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Jabaran</td>
                            <td>Lorem</td>
                            <td>Ipsum</td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Uche</td>
                            <td>Lorem</td>
                            <td>Ipsum</td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Paul</td>
                            <td>Lorem</td>
                            <td>Ipsum</td>
                            <td>Loreum</td>
                        </tr>
                        <tr>
                            <td>Daniel</td>
                            <td>Lorem</td>
                            <td>Ipsum</td>
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