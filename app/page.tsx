"use client";

import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@components'
import { fetchCars } from '@utils'
import { CarState } from '@types';
import { fuels, yearsOfProduction } from '@constants';
import { Fragment, useEffect, useState } from 'react';

export default function Home() {

  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(false);

  //search states
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  // filter states
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',

      });

      setAllCars(result)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, model, manufacturer, limit])

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManuFacturer={setManufacturer} setModel={setModel} />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, idx) => (
                <Fragment key={`${car.city_mpg}_${idx}`}>
                  <CarCard car={car} />
                </Fragment>
              ))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'><Image src="/loader.svg" width={50} height={50} alt='loader' /></div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          !loading && (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        )}
      </div>
    </main>
  )
}
