import React, { useState } from 'react'
import { Vertical } from '../../modules/wizards/components/Vertical'
import 'react-datepicker/dist/react-datepicker.css';
import SelectCountry from '../../components/VisaCountrySelect'
import { VisaTable } from '../../components/VisaTable'



function NewVisaWrapper() {
    const [visaForm, showVisaForm] = useState(false);
    const [visaList, showVisaList] = useState(false);
    return (
        <div>
            {visaForm ?
                <Vertical />
                :
                <>
                {visaList ?
            <VisaTable className='' title={'VISA'} show={showVisaForm}/>
            :    
            
                <SelectCountry show={showVisaList} />
}
                </>
            }
        </div>
    )
}

export default NewVisaWrapper



