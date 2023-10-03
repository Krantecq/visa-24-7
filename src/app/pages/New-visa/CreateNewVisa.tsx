import React, { useState } from 'react'
import { Vertical } from '../../modules/wizards/components/Vertical'
import 'react-datepicker/dist/react-datepicker.css';
import SelectCountry from '../../components/VisaCountrySelect'
import { VisaTable } from '../../components/VisaTable'
import { ApplyVisa } from '../../components/ApplyVisa';



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
                        <VisaTable className='' title={'VISA'} show={showVisaForm} visaList={visaList} />
                        :

                        <ApplyVisa show={showVisaList} visaList={visaList} />
                    }
                </>
            }
        </div>
    )
}

export default NewVisaWrapper



