import React, { useState, useEffect } from 'react';
import { PropertiesContext } from './PropertiesContext';
import PropertiesServices from './PropertiesServices';
import ExchangeRateServices from '../ExchangeRateServices';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [metaProperties, setMetaProperties] = useState([]);
  const [valueUf, setValueUf] = useState({});

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState('');


  const fetchAllProperties = async (currentPage, limit, statusId, companyId) => {
    const { data, meta } = await PropertiesServices.getProperties(currentPage,limit,statusId,companyId);
    setProperties(data);
    setMetaProperties(meta);

    setTotalItems(meta.totalItems);
    setTotalPages(Math.ceil(meta.totalItems / limit)); 
  };

  const getValueUF = async () => {
    const value = await ExchangeRateServices.getExchangeRateUF();
    setValueUf(value.UFs[0]);
  };

  useEffect(() => {
    getValueUF();
  }, []);

  const handlePageChange = (newPage) => {
    setProperties([]);
    setPage(newPage);
    fetchAllProperties(newPage, 9, 1, 1);
  };

  return (
    <PropertiesContext.Provider
      value={{
        contextData: {
          properties,
          metaProperties,
          fetchAllProperties,
          valueUf,
          page,
          totalPages,
          totalItems,
          handlePageChange
        },
      }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}

export default PropertiesProvider
