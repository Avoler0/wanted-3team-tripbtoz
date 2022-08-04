import React from 'react';
import { useState, useEffect } from 'react';
import { hotelsService } from '../api/axiosInstance';
import { Hotel, UserDataType } from '../interfaces/types';
import { getSearchQueryString } from '../utils/getQueryString';
import { getLocalStorage } from '../utils/storage';

export default function useHotels() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [searchQueryString, setSearchQueryString] = useState<string>('');
  const [hotelInfo, setHotelInfo] = useState({});

  const userHotels = getLocalStorage('userHotels', []);

  function getResultsByPage(page: number = 1, searchParameter?: UserDataType | null) {
    setIsLoading(true);
    if (page === 1) {
      const searchQueryString = searchParameter ? getSearchQueryString(searchParameter, userHotels) : '';
      setSearchQueryString(searchQueryString);
      setTimeout(async () => {
        const data = await hotelsService.get(`?${searchQueryString}&_page=${page}`);
        setHotels(data);
        setIsLoading(false);
      }, 500);
    } else {
      setTimeout(async () => {
        const data = await hotelsService.get(`?${searchQueryString}&_page=${page}`);
        setHotels([...hotels, ...data]);
        setIsLoading(false);
      }, 500);
    }
  }

  function getHotelInfo(hotelName: string) {
    setIsLoading(true);
    setTimeout(async () => {
      const data = await hotelsService.get(`?hotel_name=${hotelName}`);
      setHotelInfo(data);
      setIsLoading(false);
    }, 500);
  }

  useEffect(() => {
    getResultsByPage(1, null);
  }, []);

  return { isLoading, hotels, userHotels, hotelInfo, getResultsByPage, getHotelInfo };
}
