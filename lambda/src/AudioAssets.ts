'use strict';

import { Request, IntentRequest, LaunchRequest } from 'ask-sdk-model';
let en = {
    card: {
        title: 'AOS Radio',
        text: 'Less bla bla bla, more la la la',
        image: {
            largeImageUrl: 'https://alexademo.ninja/skills/logo-512.png',
            smallImageUrl: 'https://alexademo.ninja/skills/logo-108.png'
        }
    },
    url: 'https://audio1.maxi80.com',
    startJingle: 'https://s3-eu-west-1.amazonaws.com/alexa.maxi80.com/assets/jingle.m4a'
};

let globalAudioData = {
        'en-US': en,
        'en-GB': en,
        'en-CA': en,
        'en-IN': en,
        'en-AU': en
};

export function audioData(request : Request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = (<IntentRequest | LaunchRequest>request).locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

