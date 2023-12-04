import { api } from '../../api/index';
import { company } from '../../constants/company'
import { paginationTopLimit } from '../../constants/paginate'

const PropertiesServices = {
  getProperties: async (
    currentPage,
    limit = paginationTopLimit.limit,
    operation = '',
    typeProperty = ''
  ) => {
    let operationStr = operation ? '&operationType='+operation: '';
    let propertyStr = typeProperty ? '&typeOfProperty='+typeProperty: '';

    const response = await api.get(
      `properties?page=${currentPage}&limit=${limit}&statusId=${company.statusId}&companyId=${company.companyId}${operationStr}${propertyStr}`
    );

    // respuesta para unidades nuevas
    const responseNewUnities = await api.get(
      `properties?page=${currentPage}&limit=${limit}&statusId=${company.statusId}&companyId=${company.companyId}&operationType=venta`
    );

    return {
      data: response.data.data,
      newUnitiesData: responseNewUnities.data.data,
      meta: response.data.meta,
    };
  },

  getAllProperties: async (
    currentPage = paginationTopLimit.limitPage,
    limit = paginationTopLimit.topLimit,
    statusId = company.statusId,
    companyId = company.companyId
  ) => {
    const response = await api.get(
      `properties?page=${currentPage}&limit=${limit}&statusId=${statusId}&companyId=${companyId}`
    );
    return { data: response.data.data, meta: response.data.meta };
  },

  getProperty: async (id, statusId, companyId) => {
    const response = await api.get(
      `properties/${id}?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  // getPropertyByIdCode: async (url) => {
  //   const response = await api.get(`${url}`);
  //   return response.data;
  // },

  // Obtener ventas por venta de departamentos
  getPropertiesByCard: async (
    currentPage = paginationTopLimit.limitPage,
    limit = paginationTopLimit.topLimit,
    statusId = company.statusId,
    companyId = company.companyId,
    operationType,
    typeOfProperty
  ) => {
    const response = await api.get(
      `properties?page=${currentPage}&limit=${limit}&statusId=${statusId}&companyId=${companyId}&operationType=${operationType}&typeOfProperty=${typeOfProperty}`
    );
    return { data: response.data.data, meta: response.data.meta };
  },
};

export default PropertiesServices;