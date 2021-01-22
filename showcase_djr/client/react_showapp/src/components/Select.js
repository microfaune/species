import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import './Article.css'
import axios from 'axios'

function Select() {
    const history = useHistory();

    const [birds, setBirds] = useState([])
    const [french_name, setFrench_name] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.get('http://localhost:8000/api/v1/birds')
        console.log(response.data)
        setFrench_name(event.target.value)
        setBirds(response.data)
        history.push(`api/v1/birds/${event.target.value}`, { from: "HomePage" })
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

	return (
		<div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <label htmlFor="oiseau">Sélectionnez une espèce</label>
                    <select className="form-control " onChange={handleSubmit} id="oiseau" required>
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
        </div>
	);     
}

export default Select