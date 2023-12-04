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

  const [filterOperation, setFilterOperation] = useState('');
  const [filterTypeProperty, setFilterTypeProperty] = useState('');

  const fetchAllProperties = async (currentPage, limit,operation,typeProperty) => {
    const { data, meta } = await PropertiesServices.getProperties(currentPage,limit,operation,typeProperty);
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
    fetchAllProperties(newPage, 9, filterOperation, filterTypeProperty);
  };

  const handleFilterSubmit = (operation,typeProperty) => {
    setProperties([]);
    setFilterTypeProperty(typeProperty);
    setFilterOperation(operation);
    fetchAllProperties(page, 9, operation, typeProperty);
  }

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
          handlePageChange,
          handleFilterSubmit
        },
      }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}

export default PropertiesProvider
