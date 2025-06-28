// utils/gtm.ts

interface GTMEvent {
  event: string;
  [key: string]: any;
}

export const sendGTMEvent = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined' && typeof (window as { dataLayer?: any[] }).dataLayer !== 'undefined') {
    (window as { dataLayer: any[] }).dataLayer.push(eventData);
    console.log('GTM Event pushed:', eventData);
  } else {
    console.warn('dataLayer not found or not in browser environment. GTM event not sent:', eventData);
  }
};