import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import hotels from '../hotels.json';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${guests} guests`} />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>{searchResults.length} Stays - {range} - for {guests} guests</p>

                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms with Bed</p>
                    <p className='button'>More Filters</p>
                </div>

                <div className='flex flex-col'>
                    {searchResults?.map((result) => (
                        <InfoCard key={result.title} {...result} />
                    ))}
                </div>
            </section>
            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                <Map searchResults={searchResults} />
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps(ctx) {
    const searchResults = hotels;

    return {
        props: {
            searchResults
        }
    }
}