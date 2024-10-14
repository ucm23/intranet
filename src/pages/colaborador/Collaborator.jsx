import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArbolOrganigrama from '../../componentes/ArbolOrganigrama';
import DiagramOrgTree from '../../componentes/DiagramOrgTree';


const Colaborador = () => {

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'black', fontSize: '22px', marginLeft: '10px' }}> Colaboradores de Grupo CTI</h1>
            <DiagramOrgTree />
        </div>

    );
}

export default Colaborador