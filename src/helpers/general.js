export default {
    weatherIcon(weather) {
        switch (weather) {
            case '11d':
                return
                break;
            case '09d':
            case '10d':
            case '10n':
                return 'cloud-rain'
                break;
            case '13d':
                return 'snowflake'
                break;
            case '50d':
                return 'smog'
                break;
            case '01d':
            case '01n':
                return 'cloud-sun'
                break;
            case '02d':
            case '02n':
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return 'cloud'
                break;
        }
    }, 

    
}