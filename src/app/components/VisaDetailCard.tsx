import { Header } from "../../_metronic/layout/components/header/Header";

type VisaData = {
    country_code: string;
    nationality_code: string;
    entry_process: string;
    application_id: string;
    customer_id: string;
    first_name: string;
    last_name: string;
    birth_place: string;
    birthday_date: string;
    nationality: string;
    passport_number: string;
    passport_issue_date: string;
    passport_expiry_date: string;
    gender: string;
    marital_status: string;
    passport_front: string;
    application_arrival_date: string;
    application_departure_date: string;
    application_destination: string;
    photo: string;
    fathers_name: string;
    passport_back: string;
    pan_card: string;
    visa_status: string;
    visa_amount: string;
    created_at: string;

    // Add other properties as needed
};

type Props = {
    visaData: VisaData[] | null;
};

const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
};

const formatDate1 = (dateString) => {
    // Create a Date object from the input date string
    const date = new Date(dateString);

    // Get the month name as a three-letter abbreviation (e.g., "Oct")
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];

    // Get the day and year
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date string
    return `${month} ${day}, ${year}`;
};
const getCountryNameByCode = (countryCode) => {
    const countryCodes = {
        AE: "United Arab Emirates",
    };

    // Use the provided countryCode to look up the country name
    return countryCodes[countryCode] || "Unknown"; // Default to "Unknown" if the code is not found
};

const VisaDetailCard = ({ visaData }: Props) => {
    // Check if visaData is null or an empty array and handle it accordingly
    if (visaData === null || visaData.length === 0) {
        return <div>No visa data available</div>;
    }

    return (
        <div>
            {visaData.map((entry, index) => (
                <div className='w-full mt-5' style={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    justifyContent: 'space-between',
                    borderRadius: 20,
                    borderColor: '#f5f5f5',
                    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
                    width: '100%',
                }}>
                    <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className="p-10">
                        <h2>
                            {entry.first_name}  {entry.last_name} - {entry.passport_number} - {formatDate1(entry.application_arrival_date)}
                        </h2>
                        <br />
                        <h6>
                            Created:
                            {formatDate(entry.created_at)}
                        </h6>
                        <br />

                        <h5>
                            {getCountryNameByCode(entry.country_code)}
                        </h5>
                        <p>
                            UAE 30 Days Single Entry E-Visa {entry.entry_process}: {formatDate1(entry.application_arrival_date)} - {formatDate1(entry.application_departure_date)}
                        </p>
                    </div>
                    <div style={{ flex: '1', borderRight: '1px solid #f5f5f5' }} className="p-10">
                        <h2>
                            Applicants:   1
                        </h2>
                        <br />
                        <br />
                        <h6>
                            {entry.visa_status}
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
            ))}
        </div>
    );
};

export { VisaDetailCard };
