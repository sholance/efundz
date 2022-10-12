//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

// export type Company = {
//     company: string;

// };
//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format


const Company: React.FC = () => {
    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR("/api/base");

    //Handle the error state
    if (error) return <div>Failed to load </div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    return (
        <div>
            <ul>
                <li>Name: {data.company.name}</li>
                <li>Language: {data.company.id}</li>
            </ul>
        </div>
    );
}
export default Company;