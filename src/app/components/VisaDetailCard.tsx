import { useState } from 'react'
import { Header } from '../../_metronic/layout/components/header/Header'
import BackIcon from '@mui/icons-material/ArrowBackOutlined'
import CheckIcon from '@mui/icons-material/VerifiedUserOutlined'
import TravelerForm from '../modules/wizards/components/TravelerForm'
import ApplicationFormView from './ApplicationFormView'
import { Box, Step, StepLabel, Stepper } from '@mui/material'

type VisaData = {
    country_code: string
    nationality_code: string
    entry_process: string
    application_id: string
    customer_id: string
    first_name: string
    last_name: string
    birth_place: string
    birthday_date: string
    nationality: string
    passport_number: string
    passport_issue_date: string
    passport_expiry_date: string
    gender: string
    marital_status: string
    passport_front: string
    application_arrival_date: string
    application_departure_date: string
    application_destination: string
    photo: string
    fathers_name: string
    passport_back: string
    pan_card: string
    visa_status: string
    visa_amount: string
    created_at: string
    updated_at: string
    visa_description: string
    // Add other properties as needed
}

type Props = {
    visaData: VisaData[] | null
}

const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }

    const formattedDate = date.toLocaleDateString('en-US', options)
    return formattedDate
}

const formatDate1 = (dateString) => {
    // Create a Date object from the input date string
    const date = new Date(dateString)

    // Get the month name as a three-letter abbreviation (e.g., "Oct")
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    const month = monthNames[date.getMonth()]

    // Get the day and year
    const day = date.getDate()
    const year = date.getFullYear()

    // Format the date string
    return `${month} ${day}, ${year}`
}
const getCountryNameByCode = (countryCode) => {
    const countryCodes = {
        AE: 'United Arab Emirates',
    }

    // Use the provided countryCode to look up the country name
    return countryCodes[countryCode] || 'Unknown' // Default to "Unknown" if the code is not found
}


const getStepStatuses = (visa_status) => {
    // Define your default stepStatuses with 'done' set to false for all steps
    const defaultStepStatuses = [
        { label: 'Errors Fixed', done: false },
        { label: 'Application Complete', done: false },
        { label: 'Application Paid', done: false },
        { label: 'Application Submitted', done: false },
        { label: 'Automated QC Passed', done: false },
        { label: 'Manual QC Passed', done: false },
        { label: 'Submitted to Immigration', done: false },
        { label: 'Visa Approved', done: false },
    ];

    // Use a switch statement or if/else to customize stepStatuses based on visa_status
    switch (visa_status) {
        case 'Applied' || 'In process':
            // Set 'done' to true for steps up to 'Application Submitted'
            return defaultStepStatuses.map((step, index) =>
                index <= 3 ? { ...step, done: true } : step
            );
        case 'Processed':
            // Set 'done' to true for steps up to 'Manual QC Passed'
            return defaultStepStatuses.map((step, index) =>
                index <= 7 ? { ...step, done: true } : step
            );
        case 'Not Issued':
            // Set 'done' to true for steps up to 'Manual QC Passed' and 'Visa Approved'
            return defaultStepStatuses.map((step, index) =>
                index <= 1 ? { ...step, done: true } : step
            );
        case 'Waiting':
            return defaultStepStatuses.map((step, index) =>
                index <= 2 ? { ...step, done: true } : step
            );
        default:
            return defaultStepStatuses;
    }
};



const VisaDetailCard = ({ visaData }: Props) => {
    const [Detail, seeDetail] = useState(false)
    const [selectedVisa, setSelectedVisa] = useState<VisaData | null>(null)
    const [viewApplication, setViewApplication] = useState<VisaData | null>(null)
    const handleViewDetailsClick = (entry: VisaData) => {
        setSelectedVisa(entry)
    }

    const handleViewApplicationClick = (entry: VisaData) => {
        setSelectedVisa(null)
        setViewApplication(entry)
    }

    const handleGoBackClick = () => {
        setSelectedVisa(null)
        setViewApplication(null)
    }

    // Check if visaData is null or an empty array and handle it accordingly
    if (visaData === null || visaData.length === 0) {
        return <div>No visa data available</div>
    }

    if (selectedVisa) {

        const stepStatusesForVisa = getStepStatuses(selectedVisa.visa_status);

        return (
            <div>
                <div
                    onClick={handleGoBackClick}
                    style={{ cursor: 'pointer' }}
                    className='d-flex items-center'
                >
                    <BackIcon style={{ color: '#007bff' }} />
                    <h6 style={{ color: '#007bff', marginLeft: 10 }}>Go Back to main Dashboard</h6>
                </div>
                <div className='p-10'>
                    <h2>
                        {selectedVisa.first_name} {selectedVisa.last_name} - {selectedVisa.passport_number} -{' '}
                        {formatDate1(selectedVisa.application_arrival_date)}
                    </h2>
                    <br />
                    <div className='d-flex'>
                        <h6>
                            Created On
                            <p className='pt-2 fs-8'>{formatDate1(selectedVisa.created_at)}</p>
                        </h6>
                        <h6 className='px-20'>
                            Applicants
                            <p className='pt-2 fs-8'>1</p>
                        </h6>
                    </div>
                </div>
                <div
                    className='mb-10 mx-10 px-5 py-5'
                    style={{
                        width: 210,
                        border: '1px solid',
                        borderColor: '#696969',
                        borderRadius: 10,
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                    }}
                >
                    <h6 className='fs-4' style={{ marginTop: 5 }}>
                        + Add Application
                    </h6>
                </div>
                <div className='card-body'>
                    <div
                        className='w-full'
                        style={{
                            borderRadius: 20,
                            borderColor: '#f5f5f5',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            marginLeft: 10,
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: '#332789',
                                width: '100%',
                                height: 50,
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                paddingLeft: 20,
                                alignItems: 'center',
                                display: 'flex',
                            }}
                        >
                            <h2 style={{ color: 'white', paddingTop: 7 }}>VISA {selectedVisa.visa_status}</h2>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginLeft: 15,
                                marginTop: 15,
                            }}
                        >
                            <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className='p-10'>
                                <h2>
                                    {selectedVisa.first_name} {selectedVisa.last_name}
                                </h2>
                                <br />
                                <h6>
                                    Submitted On:
                                    {formatDate(selectedVisa.created_at)}
                                    <br />
                                    <br />
                                    Passport Number: {selectedVisa.passport_number}
                                </h6>
                                <br />

                                <h5>{getCountryNameByCode(selectedVisa.country_code)}</h5>
                                <p>
                                    {selectedVisa.visa_description}
                                    <br />
                                    Travel: {formatDate1(selectedVisa.application_arrival_date)} -{' '}
                                    {formatDate1(selectedVisa.application_departure_date)}
                                </p>
                            </div>
                            <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className='p-10'>
                                <h2>Application Details :</h2>
                                <br />

                                <div style={{ flex: '1', padding: '20px', paddingTop: 0, marginLeft: 20 }}>
                                    <Stepper orientation="vertical">
                                        {stepStatusesForVisa.map((step, index) => (
                                            <Step key={step.label} completed={step.done}>
                                                <StepLabel style={{ padding: 0, paddingLeft: 0 }}>
                                                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                                                        <span style={{ fontSize: 14, marginLeft: 5 }}>{step.label}</span>
                                                    </Box>
                                                </StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </div>
                                {/* <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                  {selectedVisa.visa_status === 'Processed' && (
                    <>
                      <li>✓ Errors Fixed</li>
                      <li className='pt-4'>✓ Application Complete</li>
                      <li className='pt-4'>✓ Application Paid</li>
                      <li className='pt-4'>✓ Application Submitted</li>
                      <li className='pt-4'>✓ Automated QC Passed</li>
                      <li className='pt-4'>✓ Manual QC Passed</li>
                      <li className='pt-4'>✓ Submitted to Immigration</li>
                      <li className='pt-4'>✓ Visa Approved</li>
                    </>
                  )}
                  {selectedVisa.visa_status === 'Not Issued' && (
                    <>
                      <li>✓ Errors Fixed</li>
                      <li className='pt-4'>✓ Application Complete</li>
                      <li className='pt-4'>Application Paid</li>
                      <li className='pt-4'>Application Submitted</li>
                      <li className='pt-4'>Automated QC Passed</li>
                      <li className='pt-4'>✓ Manual QC Passed</li>
                      <li className='pt-4'>✓ Submitted to Immigration</li>
                      <li className='pt-4'>✓ Visa Approved</li>
                    </>
                  )}
                </ul> */}
                            </div>

                            <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className='p-10 '>
                                <div
                                    className='px-10 py-5'
                                    style={{ width: '100%', backgroundColor: '#332789', borderRadius: 10 }}
                                >
                                    <h6 style={{ color: 'white' }}>
                                        <CheckIcon style={{ marginLeft: -20 }} />
                                        VISA Approved on
                                    </h6>
                                    <h4 style={{ color: 'white' }}>{formatDate(selectedVisa.updated_at)}</h4>
                                </div>
                                <div
                                    onClick={() => handleViewApplicationClick(selectedVisa)}
                                    className='mb-10 mx-10 mt-20 px-10 py-5'
                                    style={{
                                        border: '2px solid #332789',
                                        cursor: 'pointer',
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <h6 className='fs-4' style={{ color: '#332789', paddingTop: 7 }}>
                                        View Application
                                    </h6>


                                </div>
                                {selectedVisa.visa_status === 'Proccesed' &&
                                    <button className='mb-10 mx-10 px-20 py-5' style={{
                                        border: 'none',
                                        cursor: 'pointer',
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        backgroundColor: '#332789',
                                        color: '#fff',
                                        fontSize: "17px",
                                        whiteSpace:'nowrap'

                                    }}>
                                        Download
                                    </button>
                                }
                                {selectedVisa.visa_status === 'Not issued' &&
                                    <button className='mb-10 mx-10 px-20 py-5' style={{
                                        border: 'none',
                                        cursor: 'pointer',
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        backgroundColor: '#332789',
                                        color: '#fff',
                                        fontSize: "17px",
                                        whiteSpace:'nowrap'

                                    }}>
                                        Issue Visa
                                    </button>
                                }
                                     {selectedVisa.visa_status === 'In process' || selectedVisa.visa_status === 'Applied' &&
                                    <button className='mb-10 mx-10 px-20 py-5' style={{
                                        border: 'none',
                                        cursor: 'pointer',
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        backgroundColor: '#332789',
                                        color: '#fff',
                                        fontSize: "17px",
                                        whiteSpace:'nowrap'
                                    }}>
                                        Check Status
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    {/* end::Table container */}
                </div>
            </div>
        )
    }
    if (viewApplication) {
        return (
            <div>
                <div
                    onClick={handleGoBackClick}
                    style={{ cursor: 'pointer' }}
                    className='d-flex items-center'
                >
                    <BackIcon style={{ color: '#007bff' }} />
                    <h6 style={{ color: '#007bff', marginLeft: 10 }}>Go Back to main Dashboard</h6>
                </div>
                <ApplicationFormView viewApplication={viewApplication} />
            </div>
        )
    }
    return (
        <div>
            {visaData?.map((entry, index) => (
                <div
                    className='w-full mt-5'
                    style={{
                        display: 'flex',
                        backgroundColor: '#fff',
                        justifyContent: 'space-between',
                        borderRadius: 25,
                        borderColor: '#f5f5f5',
                        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.1)',
                        width: '100%',
                    }}
                >
                    <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className='p-10'>
                        <h2 style={{ textTransform: 'capitalize' }}>
                            {entry.first_name} {entry.last_name} - {entry.passport_number} -{' '}
                            {formatDate1(entry.application_arrival_date)}
                        </h2>
                        <h6>Created: {formatDate(entry.created_at)}</h6>

                        <h5 style={{ marginTop: 20 }}>{getCountryNameByCode(entry.country_code)}</h5>
                        <p>
                            UAE 30 Days Single Entry E-Visa {entry.entry_process}:{' '}
                            {formatDate1(entry.application_arrival_date)} -{' '}
                            {formatDate1(entry.application_departure_date)}
                        </p>
                    </div>
                    <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className='p-10'>
                        <h2>Applicants: 1</h2>
                        <br />
                        <br />
                        <h6>{entry.visa_status}</h6>
                    </div>
                    <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button
                            type='submit'
                            id='kt_sign_in_submit'
                            className='btn btn-primary'
                            onClick={() => handleViewDetailsClick(entry)}
                            style={{ backgroundColor: '#332786' }}
                        >
                            View Group
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export { VisaDetailCard }
