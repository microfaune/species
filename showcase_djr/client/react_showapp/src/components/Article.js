import React, { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import './Caroussel.css'
import image1 from '../images/img1.jpg'

// API
import axios from 'axios'


function Article () {
    const history = useHistory();
    const { id } = useParams()

    const [birds, setBirds] = useState([])
    const [french_name, setFrench_name] = useState("")


    const handleChange = async (event) => {
        event.preventDefault()
        const response = await axios.get('http://localhost:8000/api/v1/birds')
        console.log(response.data)
        setFrench_name(event.target.value)
        setBirds(response.data)
        // history.push(`api/v1/birds/${event.target.value}`, { from: "HomePage" })
    }

    const list_esp = ["Accenteur mouchet",
    "Bergeronnette grise",
    "Canard colvert",
    "Chardonneret élégant",
    "Corneille noire",
    "Épervier d'Europe",
    "Étourneau sansonnet",
    "Faucon crécerelle",
    "Faucon hobereau",
    "Fauvette à tête noire",
    "Geai des chênes",
    "Gobemouche gris",
    "Gobemouche noir",
    "Goéland argenté",
    "Grimpereau des jardins",
    "Grive draine",
    "Grive litorne",
    "Grive mauvis",
    "Grive musicienne",
    "Héron cendré",
    "Hirondelle rustique",
    "Hypolaïs polyglotte",
    "Martinet noir",
    "Merle noir",
    "Mésange à longue queue",
    "Mésange bleue",
    "Mésange charbonnière",
    "Mésange huppée",
    "Mésange noire",
    "Moineau domestique",
    "Moineau friquet",
    "Mouette rieuse",
    "Perruche à collier",
    "Pic épeiche",
    "Pic épeichette",
    "Pic vert",
    "Pie bavarde",
    "Pigeon biset",
    "Pigeon colombin",
    "Pigeon ramier",
    "Pinson des arbres",
    "Pouillot fitis",
    "Pouillot véloce",
    "Roitelet à triple bandeau",
    "Roitelet huppé",
    "Rougegorge familier",
    "Rougequeue noir",
    "Serin cini",
    "Sittelle torchepot",
    "Tourterelle turque",
    "Troglodyte mignon",
    "Verdier d'Europe"]
    
    // useEffect(() => {
    //     const fetchBird = async () => {
    //         const response = await axios.get('http://localhost:8000/api/v1/birds')
    //         console.log(response.data)
    //         setBirds(response.data)
    //     }
    //     fetchBird()
    // }, [])

	return (
        <div className="BirdPage">

            {/*   SELECT OISEAU   */}  
            {/* <div style={{backgroundImage: `url(${image1})`}}>  */}
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-auto text-center">
                        <label htmlFor="oiseau"><h5>Sélectionnez une espèce</h5></label>
                        <select className="form-control " onChange={ handleChange } id="oiseau" required>
                            <option selected>Sélection</option>
                            {list_esp.length > 0 
                            ? list_esp.map(esp => (
                                <option value={esp}>{esp}</option>
                            ))
                            : <option >Sélection</option>
                            }
                        </select>
                    </div>
                </div>
            {/* </div> */}
            </div>

            {/*   1ER CONTAINER  DESCRIPTIONS  &  AUDIO   */}       

            
            <div class="container-fluid">
                <div class="row justify-content-between">
                
                    {/*   AFFICHAGE DESCRIPTIONS    */}    
                    <div class="col-md-9">
                        {birds.length > 0 
                        ? birds.map(bird => (
                            <article key={bird.id}>
                                {bird.french_name === french_name &&
                                    <div>
                                        {/* <h1>Page de l'oiseau {id}</h1>  */}
                                        <h2>{bird.french_name}</h2>
                                        <h3>{bird.english_name}</h3>
                                        <h4>{bird.latin_name}</h4>
                                        <p >{bird.summary}</p>
                                        <p className='source'>Source : {bird.source} </p>
                                    </div>
                                }
                            </article>
                        ))
                        : ""
                        }
                    </div>

                    {/*   AFFICHAGE AUDIOS    */} 
                    <div class="col-6 col-md-auto text-center">
                        {birds.length > 0 
                        ? birds.map(bird => (
                            <article key={bird.id}>
                                {bird.french_name === french_name &&
                                    <div>
                                        <span>Ecouter l'{bird.french_name} : </span>
                                        {bird.audios.length > 0 
                                        ? bird.audios.map(audiofile => (
                                        
                                            <section className="Audios">
                                                <audio controls>
                                                    <source src={audiofile.audio_file} type="audio/mp3"/>
                                                    <p>Votre navigateur ne prend pas en charge l'audio HTML5. Voici, à la place, un <a href="{audiofile.source}">lien sur l'audio</a>.</p>
                                                </audio>
                                                <p className='sound_type'>Type : {audiofile.sound_type} </p>
                                            </section>
                                        ))
                                        : <p>pas d'audio</p>
                                        }
                                        <p className='source'>Source : xeno-canto </p>
                                    </div>
                                }
                            </article>
                        ))
                        : ""
                        }
                    </div>

                </div>
            </div>


            {/*   2eme CONTAINER   SONOGRAMME    */}   

            <div class="container-fluid">
                <div class="row">

                    {/*   AFFICHAGE SONOGRAMME    */} 
                    <div class="col-12">
                        {birds.length > 0 
                        ? birds.map(bird => (
                            <article key={bird.id}>
                                {bird.french_name === french_name &&
                                    <div>
                                        <span>Exemple de sonogramme </span>
                                        {bird.audios.length > 0 
                                        ? bird.audios.map(audio => (
                                            <article>
                                                {audio.sonogram !=  null && (
                                                <img className="img-thumbnail" src={audio.sonogram} alt="sonogramme"/>
                                                )}
                                            </article>
                                        ))
                                        : <p>pas de  sonogramme</p>
                                        }
                                        <p className='source'>Source : xeno-canto </p>
                                    </div>
                                }
                            </article>
                        ))
                        : ""
                        }
                    </div>

                </div>
            </div>

            {/*   3eme CONTAINER  RESSOURCES SUPP    */}   

            <div class="container-fluid">
                <div class="row">

                    {/*   AFFICHAGE RESSOURCES SUPP    */}    
                    <div class="col-12">
                        {birds.length > 0 
                        ? birds.map(bird => (
                            <article key={bird.id}>
                                {bird.french_name === french_name &&
                                    <div>
                                        <span>Pour plus d'informations, consultez les sites suivants : </span>
                                        <ul className="list-group list-group-horizontal">
                                            {bird.links.length > 0 
                                            ? bird.links.map(link => (

                                                    <li className="list-group-item"><a href={link.url}>{link.title}</a></li>

                                            ))
                                            : <p>pas d'infos supp</p>
                                            }
                                        </ul>
                                            
                                            <span>L'{bird.french_name} en images :</span>
                                    </div>
                                }
                            </article>
                        ))
                        : ""
                        }
                    </div>

                </div>
            </div>




            {/*   4eme CONTAINER  Caroussel PHOTOS    */} 
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            {birds.length > 0 
                            ? birds.map(bird => (
                                <article key={bird.id}>
                                    {bird.french_name === french_name &&

                                            <Carousel className="carousel slide carousel-fade">
                                                {bird.pictures.length > 0 
                                                ? bird.pictures.map(imgfile => (
                                                
                                                    <Carousel.Item interval={5000}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={imgfile.picture_file}
                                                            alt={bird.french_name}
                                                        />
                                                        <p className='source'>Source : {imgfile.source} </p>
                                                    </Carousel.Item>

                                                
                                                ))
                                                : <p>pas de photo</p>
                                                }
                                            </Carousel>
                                            
                                    }
                                </article>
                            ))
                            : ""
                            }
                        </div>
                    </div>
                </div>
                
        </div>
	);     
}

export default Article;