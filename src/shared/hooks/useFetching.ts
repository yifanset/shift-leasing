import { useState, useEffect, useCallback } from 'react';

type FetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
};

const useFetching = <T,>(callback: () => Promise<T>): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await callback();
            setData(result);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'Something went wrong'
            );
        } finally {
            setLoading(false);
        }
    }, [callback]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};

export default useFetching;