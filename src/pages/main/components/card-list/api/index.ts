import api from '../../../../../shared/api/index.ts';

export const fetchCars = async () => {
    try {
        const response = await api.get('/cars/info');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch cars:', error);
        throw error;
    }
};

