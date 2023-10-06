import { Header } from "../../_metronic/layout/components/header/Header"

type Props = {
    className: string
    description: string
    color: string
    icon: string
    textColor: string
    count: number | string
}

const VisaDetailCard = () => (
        <div className='w-full mt-5' style={{
            display: 'flex',
            backgroundColor:'#fff',
            justifyContent: 'space-between',
            borderRadius: 20,
            borderColor: '#f5f5f5',
            boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
            width: '100%',

        }}>
            <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className="p-10">
                <h2>
                    ZAHIR HASSAN BHAT - N8929436 - Oct 8, 2023
                </h2>
                <br />
                <h6>
                    Created:
                    Oct 5, 2023
                    at
                    1:27 PM
                </h6>
                <br />

                <h5>
                    United Arab Emirates
                </h5>
                <p>
                    UAE 30 Days Single Entry E-Visa
                    Travel: Oct 8, 2023 - Oct 25, 2023
                </p>

            </div>
            <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className="p-10">

                <h2>
                    Applicants:   1
                </h2>
                <br />
                <br />
                <h6>
                    Approved
                </h6>

            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    type='submit'
                    id='kt_sign_in_submit'
                    className='btn btn-primary'
                >
                    View Group

                </button>

            </div>
        </div>

)
export { VisaDetailCard }
