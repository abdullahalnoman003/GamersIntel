import React, { useState } from 'react';

const ImageWithLoader = ({
    src,
    alt,
    className = '',
    containerClassName = '',
    loaderClassName = '',
    showLoader = true,
    fallbackSrc = null
}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);

    const handleLoad = () => {
        setLoading(false);
        setError(false);
    };

    const handleError = () => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            setError(false);
        } else {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <div className={`relative ${containerClassName}`}>
            {/* DaisyUI Skeleton Loader */}
            {loading && showLoader && (
                <div className={`skeleton absolute inset-0 ${loaderClassName}`}></div>
            )}

            {/* Error State */}
            {error && (
                <div className={`absolute inset-0 flex items-center justify-center bg-base-300/70 backdrop-blur-sm ${loaderClassName}`}>
                    <div className="text-center">
                        <p className="text-base-content/50 text-sm">⚠️ Image unavailable</p>
                    </div>
                </div>
            )}

            {/* Actual Image */}
            <img
                src={currentSrc}
                alt={alt}
                className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
};

export default ImageWithLoader;
