import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Add() {

    let [state, setState] = useState({
        tital: "", img: "", select: [], select1: [], select2: [], duretion: "", certificate: "", date: "", reting: "",
        schedule: "", about: "", Hero: [], heroine: [], director: ""
    })

    let [genre, setGenre] = useState([])
    let [language, setLanguage] = useState([])
    let [mode, setMode] = useState([])

    const AddMovie = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if (name == 'select2' && e.target.checked == false) {

            const index = genre.indexOf(e.target.value);
            genre.splice(index, 1);
        } else if (name == 'select2' && e.target.checked == true) {
            genre.push(e.target.value)
        }
        console.log(genre);

        if (name == 'select1' && e.target.checked == false) {

            const index = language.indexOf(e.target.value);
            language.splice(index, 1);
        } else if (name == 'select1' && e.target.checked == true) {
            language.push(e.target.value)
        }
        console.log(language);

        if (name == 'select' && e.target.checked == false) {

            const index = mode.indexOf(e.target.value);
            mode.splice(index, 1);
        } else if (name == 'select' && e.target.checked == true) {
            mode.push(e.target.value)
        }
        console.log(mode);


        setState({

            ...state, [name]: value, genre, language, mode
        })

    }
    const submitData = (e) => {
        e.preventDefault();
        fetch("http://localhost:3005/movie", {
            method: 'post',
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/Json"
            }
        }).then(res => { console.log("date inserted"); }).catch(err => { console.log("data not found") })
    }
    return (
        <div className='pages10'>
            <h3 className='d-flex justify-content-center'>Add movie</h3>
            <form border={1} className='d-flex justify-content-center ' onSubmit={(e) => submitData(e)}>

                <br />
                <table border={1} className='addto'>
                    <tr>
                        <td><label>Enter your tital</label></td>
                        <td><input type='text' name='tital' onChange={(e) => AddMovie(e)} /></td>
                    </tr>
                    <tr>
                        <td><label>Enter your Images</label></td>
                        <td>
                        <select name='img' onChange={(e) => AddMovie(e)}>
                                <option>Movie-IMG</option>
                                <option>avenger.jpeg</option>
                                <option>barmhastr.jpeg</option>
                                <option>kgf.jpeg</option>
                                <option>dasara.avif</option>
                                <option>bholaa.jpg</option>
                                <option>bin.webp</option>
                                <option>aladdin.jpg</option>

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Enter Movie Mode</label></td>
                        <td>
                            <input type='checkbox' name='select' value="2D/" onChange={(e) => AddMovie(e)} />2D
                            <input type='checkbox' name='select' value="3D/" onChange={(e) => AddMovie(e)} />3D
                            <input type='checkbox' name='select' value="4D/" onChange={(e) => AddMovie(e)} />4D
                            <input type='checkbox' name='select' value="4DX" onChange={(e) => AddMovie(e)} />4DX
                        </td>

                    </tr>
                    <tr>
                        <td><label>Enter Movie language</label></td>
                        <td>
                            {/* <select name='select1'  onChange={(e)=>AddMovie(e)}>
                                <option value='selct_language'>--selct_language--</option>
                                <option value='gujrati'>gujrati</option>
                                <option value='English'>English</option>
                                <option value='Hindi'>Hindi</option>
                            </select> */}
                            <input type='checkbox' name='select1' value="Gujrati/" onChange={(e) => AddMovie(e)}/>Gujrati
                            <input type='checkbox' name='select1' value="English/" onChange={(e) => AddMovie(e)}/>English
                            <input type='checkbox' name='select1' value="Hindi" onChange={(e) => AddMovie(e)}/>Hindi

                        </td>

                    </tr>
                    <tr>
                        <td><label>Enter Movie Gener</label></td>
                        <td>
                            <input type='checkbox' name='select2' value="Action/" onChange={(e) => AddMovie(e)} />Action
                            <input type='checkbox' name='select2' value="Drama/" onChange={(e) => AddMovie(e)} />Drama
                            <input type='checkbox' name='select2' value="Romentic" onChange={(e) => AddMovie(e)} />Romentic
                        </td>

                    </tr>
                    <tr>
                        <td><label>Enter your Movie Duretion</label></td>
                        <td><input type='text' name='duretion' onChange={(e) => AddMovie(e)} /></td>
                    </tr>
                    <tr>
                        <td><label>Enter your Certificate</label></td>
                        <td><input type='text' name='certificate' onChange={(e) => AddMovie(e)} /></td>
                    </tr>
                    <tr>
                        <td><label>Enter your Reles_Date</label></td>
                        <td><input type='text' name='date' onChange={(e) => AddMovie(e)} /></td>
                    </tr>
                    <tr>
                        <td><label>Enter your Reating</label></td>
                        <td><input type='text' name='reting' onChange={(e) => AddMovie(e)} /></td>
                    </tr>
                    <tr>
                        <td><label>Enter your Schedule</label></td>
                        <td><input type='text' name='schedule' onChange={(e) => AddMovie(e)} /></td>
                    </tr>
                    <tr>
                        <td><label>About Movie </label></td>
                        <td> <textarea type='text' name='about' onChange={(e) => AddMovie(e)}></textarea></td>
                    </tr>
                    <tr>
                        <td><label>Enter your Role</label></td>
                        <td>
                            <select name='Hero' onChange={(e) => AddMovie(e)}>
                                <option value='hero'>--selct_Hero--</option>
                                <option value='ritik_roshan'>ritik_roshan</option>
                                <option value='Ajay_Devgn'>Ajay_Devgn</option>
                                <option value='Sanjay_Mishra'>Sanjay_Mishra</option>
                            </select>
                            <select name='heroine' onChange={(e) => AddMovie(e)}>
                                <option value='heroine'>--selct_heroine--</option>
                                <option value='Tabu'>Tabu</option>
                                <option value='Amala_Paul'>Amala_Paul</option>
                                <option value='Raai_Laxmi'>Raai_Laxmi</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Enter your Director_name</label></td>
                        <td><input type='text' name='director' onChange={(e) => AddMovie(e)} /></td>
                    </tr>
                    <tr>
                        <td><input type='submit' value='submit' className="btn1 ms-3" /></td>
                        <td><Link to="/book"><button className="btn1">Book Tikit</button></Link></td>

                    </tr>
                </table>

            </form>
        </div>
    )
}

export default Add;
