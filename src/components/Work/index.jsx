import React from 'react'
import Title from '../Title'
import Card from '../Card'
import bernycare_notebook from '../../assets/img/berny-care.png'
import sudaca from '../../assets/img/sudaca.png'
import iquique from '../../assets/img/iquique.png'
import las_condes from '../../assets/img/las condes.png'
import './styles.scss'

const Work = () => {
    return (
        <div id="work" className="work">
            <Title title={'Trabajos'} />
            <p className="font-wght-300">
                Una seleccion de algunos de mis trabajos que he realizado tanto como empleado y freelancer.
            </p>
            <div className="work__items">
                <Card title={'BernyCare'} about={'Tratamientos y cuidados para pacientes intensivos'} img={bernycare_notebook} link={'https://www.bernycare.cl/'} />
                <Card title={'Sudaca'} about={'Ecommerce para una vida arriba de la moto'} img={sudaca} link={'https://www.tiendasudaca.cl/'} />
                <Card title={'Municipalidad de Iquique'} about={'En continúo trabajo por el bienestar comunal'} img={iquique} link={'http://www.municipioiquique.cl/'} />
                <Card title={'Municipalidad de Las Condes'} about={'Creacion de un lenguaje visual'} img={las_condes} link={'#'} />
            </div>
        </div>
    )
}

export default Work
